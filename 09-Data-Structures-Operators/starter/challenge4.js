document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// let underscoreCase = [];

// 1. Split all of the test data into an array, separated by the \n character
const button = document.querySelector(`button`);
const camelCase = function () {
  const text = document.querySelector('textarea').value;
  const underscoreSplit = text.split(`\n`);
  console.log(underscoreSplit);

  // 2. Loop over the array we created and split each element by the underscore (_)
  //   for (const n of underscoreSplit) {
  //     i++;
  //     const [first, second] = n.toLowerCase().trim().split(`_`);
  //     const output = `${first}${second.replace(
  //       second[0],
  //       second[0].toUpperCase()
  //     )}`;
  //     console.log(`${output.padEnd(20, ` `)}${`✅`.repeat(i)}`);
  //   }
  // };

  // How Jonas did the above, instead of declaring i and then increasing i every iteration, he destructured and looped over underscoreSplit.entries
  for (const [i, n] of underscoreSplit.entries()) {
    const [first, second] = n.toLowerCase().trim().split(`_`);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ` `)}${`✅`.repeat(i + 1)}`);
  }
};

button.addEventListener(`click`, camelCase);

/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
