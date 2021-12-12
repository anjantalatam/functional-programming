let input = "    JavaScript     ";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

const result = wrapInDiv(toLowerCase(trim(input))); // this is called function composition

console.log(result);
