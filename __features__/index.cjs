const fs = require("fs");
const { parseObj } = require("../dist/index");

const filePath = "__features__/index.md";
const data = fs.readFileSync(filePath, 'utf-8');
const obj = parseObj(data);

console.log(obj);