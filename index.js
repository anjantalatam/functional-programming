let input = "    JavaScript     ";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const modifiedText = _.pipe(trim, toLowerCase, wrap("div"));

console.log(modifiedText(input));
