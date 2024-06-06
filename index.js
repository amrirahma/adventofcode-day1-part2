const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");
const commands = fs.readFileSync(filePath, "utf-8").split("\r\n");

function calculateResult() {
  const allNumbersAsText = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let generalResult = 0;
  for (let command of commands) {
    const regex1 =
      /(\d)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|(zero)/g;

    const r = [];
    let m = null;
    while ((m = regex1.exec(command))) {
      regex1.lastIndex -= m[0].length - 1;
      r.push(m[0]);
    }

    const match1 = r[0];
    const match2 = r[r.length - 1];

    const firstNumber = match1.length === 1 ? match1 : allNumbersAsText[match1];
    const lastNumber = match2.length === 1 ? match2 : allNumbersAsText[match2];

    generalResult += 10 * Number(firstNumber) + Number(lastNumber);
  }
  console.log(generalResult);
}

calculateResult();
