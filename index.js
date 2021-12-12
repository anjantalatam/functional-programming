let input = "    JavaScript     ";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

const transform = _.compose(wrapInDiv, toLowerCase, trim);

const modifiedText = _.pipe(trim, toLowerCase, wrapInDiv);

console.log(transform(input));
console.log(modifiedText(input));
