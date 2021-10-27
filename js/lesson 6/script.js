function Counter() {
  let counter = 0;

  return function() {
    return counter += 2;
  }
}

const getCount = Counter()();
console.log(getCount)

// GLOBAL
//   hello
//     showName