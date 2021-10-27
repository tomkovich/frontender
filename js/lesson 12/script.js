const link =
  "http://api.weatherstack.com/current?access_key=8a0aa140e799521755c6565dbd4c20d8";

const TYPES = {
  CLOUD: "CLOUD",
  HUMIDITY: "HUMIDITY",
  PRESSURE: "PRESSURE",
  VISIBILITY: "VISIBILITY",
  UV_INDEX: "UV_INDEX",
  WIND: "WIND",
};

const WEATHER_TYPES = {
  SUNNY: "SUNNY",
  OVERCAST: "OVERCAST",
  PARTLY_CLOUDY: "PARTLY CLOUDY",
  CLEAR: "CLEAR",
  FOG: "FOG",
};

const FORM_STATE = {
  ACTIVE: "active",
};

let state = {
  city: null,
  temperature: 0,
  observationTime: "00:00 AM",
  weatherDescriptions: [],
  isDay: "yes",
  country: null,
  properties: {
    [TYPES.CLOUD]: {
      icon: "cloud.png",
      title: "CLOUD COVER",
      value: null,
    },
    [TYPES.HUMIDITY]: {
      icon: "humidity.png",
      title: "HUMIDITY",
      value: null,
    },
    [TYPES.PRESSURE]: {
      icon: "gauge.png",
      title: "PRESSURE",
      value: null,
    },
    [TYPES.VISIBILITY]: {
      icon: "visibility.png",
      title: "VISIBILITY",
      value: null,
    },
    [TYPES.UV_INDEX]: {
      icon: "uv-index.png",
      title: "UV INDEX",
      value: null,
    },
    [TYPES.WIND]: {
      icon: "wind.png",
      title: "WIND SPEED",
      value: null,
    },
  },
};

const fetchDataSuccess = ({
  current: {
    temperature,
    observation_time,
    weather_descriptions,
    is_day,
    pressure,
    cloudcover,
    humidity,
    visibility,
    uv_index: uvindex,
    wind_speed: windSpeed,
  },
  location: { name: city, country },
}) => {
  state = {
    ...state,
    city,
    country,
    temperature,
    observationTime: observation_time,
    weatherDescriptions: weather_descriptions,
    isDay: is_day === "yes",
    properties: {
      [TYPES.CLOUD]: {
        ...state.properties[TYPES.CLOUD],
        value: `${cloudcover}%`,
      },
      [TYPES.HUMIDITY]: {
        ...state.properties[TYPES.HUMIDITY],
        value: `${humidity}%`,
      },
      [TYPES.PRESSURE]: {
        ...state.properties[TYPES.PRESSURE],
        value: `${pressure} mb`,
      },
      [TYPES.VISIBILITY]: {
        ...state.properties[TYPES.PRESSURE],
        value: `${visibility} km`,
      },
      [TYPES.UV_INDEX]: {
        ...state.properties[TYPES.UV_INDEX],
        value: `${uvindex} of 10`,
      },
      [TYPES.WIND]: {
        ...state.properties[TYPES.WIND],
        value: `${windSpeed} km/h`,
      },
    },
  };

  renderComponent();
  handleInputs();
};

const fetchData = async (request = "London") => {
  try {
    const query = localStorage.getItem("city") || request;
    const response = await fetch(`${link}&query=${query}`);
    const data = await response.json();

    if (data) fetchDataSuccess(data);
  } catch (err) {
    console.log(err);
  }
};

const getWeatherImage = (currentDescription) => {
  const value = currentDescription.toUpperCase();
  switch (value) {
    case WEATHER_TYPES.SUNNY:
      return "sunny.png";
    case WEATHER_TYPES.OVERCAST:
      return "cloud.png";
    case WEATHER_TYPES.PARTLY_CLOUDY:
      return "partly.png";
    case WEATHER_TYPES.CLEAR:
      return "clear.png";
    case WEATHER_TYPES.FOG:
      return "fog.png";
    default:
      return "the.png";
  }
};

const renderProperties = (properties) =>
  Object.values(properties)
    .map(
      ({ icon, value, title }) => `
        <div class="property">
          <div class="property-icon">
            <img src="./img/icons/${icon}" alt="">
          </div>
          <div class="property-info">
            <div class="property-info__value">${value}</div>
            <div class="property-info__description">${title}</div>
          </div>
        </div>
  `
    )
    .join("");

const markup = () => {
  const {
    city,
    isDay,
    properties,
    // country,
    temperature,
    observationTime,
    weatherDescriptions,
  } = state;

  const containerClass = isDay ? "is-day" : "";
  const description = weatherDescriptions[0];

  return `<div class="container ${containerClass}">
          <div class="top">
            <div class="city">
              <div class="city-subtitle">Weather Today in</div>
              <div class="city-title" id="city">
                <span>${city}</span>
              </div>
            </div>
            <div class="city-info">
              <div class="top-left">
                <img class="icon" src="./img/${getWeatherImage(
                  description
                )}" alt="" />
                <div class="description">${description}</div>
              </div>
            
              <div class="top-right">
                <div class="city-info__subtitle">as of ${observationTime}</div>
                <div class="city-info__title">${temperature}°</div>
              </div>
            </div>
          </div>
          <div id="properties">${renderProperties(properties)}</div>
        </div>`;
};

const renderComponent = () => {
  const root = document.getElementById("root");
  root.innerHTML = markup();

  const button = document.getElementById("city");

  if (button) {
    button.addEventListener("click", toggleFormState);
  }
};

const toggleFormState = () => {
  const popup = document.getElementById("popup");
  popup && popup.classList.toggle(FORM_STATE.ACTIVE);
};

const handleInputs = () => {
  const textInput = document.getElementById("text-input");
  const closeButton = document.getElementById("close");

  if (textInput) {
    textInput.value = state.city;
    textInput.addEventListener("input", ({ target: { name, value } }) => {
      state = {
        ...state,
        [name]: value,
      };
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", toggleFormState);
  }
};

const handleForm = () => {
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const currentCity = state.city;
      if (!currentCity) return null;

      const req = localStorage.getItem("city");
      if (req === state.city) return;

      localStorage.setItem("city", currentCity);
      fetchData(currentCity);
      toggleFormState();
    });
  }
};

fetchData();
handleForm();
