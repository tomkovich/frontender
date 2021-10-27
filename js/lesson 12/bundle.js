(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const link =
  "http://api.weatherstack.com/current?access_key=8a0aa140e799521755c6565dbd4c20d8";
module.exports = link;

},{}],2:[function(require,module,exports){
const link = require("./link");

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

const fetchData = async (request = "London") => {
  console.log(request);
  try {
    const response = await fetch(`${link}&query=${request}`);
    const data = await response.json();

    if (data) {
      const {
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
      } = data;

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
      handleForm();
    }
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
            <div class="top-left">
              <div class="city">
                <div class="city-subtitle">Weather Today in</div>
                <div class="city-title" id="city">${city}</div>
              </div>

              <div class="city-info">
                <div class="city-info__subtitle">as of ${observationTime}</div>
                <div class="city-info__title">${temperature}°</div>
              </div>
            </div>
            <div class="top-right">
              <img class="icon" src="./img/${getWeatherImage(
                description
              )}" alt="" />
              <div class="description">${description}</div>
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
    const submitForm = (e) => {
      e.preventDefault();

      if (!state.city) return null;

      fetchData(state.city);
      toggleFormState();
    };

    form.addEventListener("submit", submitForm);
  }
};

fetchData();

},{"./link":1}]},{},[2]);
