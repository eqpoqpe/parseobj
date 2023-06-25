import fs from "fs";
import { parseObj } from "../";

const filePath = "index.md";
const data = fs.readFileSync(filePath, 'utf-8');
const obj = parseObj(data);

console.log(obj);