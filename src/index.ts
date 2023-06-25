import { splitContent, splitMetadata } from "./util";

// Define the interface for the parsed object
interface ParsedObject {
  [key: string]: string;
  content: string;
}

function parseObj(data: string) {

  // Parse the data into an object
  const parsedObject: ParsedObject = {
    content: ""
  };
  const [content, startIndex] = splitContent(data);
  const lines = splitMetadata(data, startIndex);

  lines.forEach(line => {
    if (line.includes(':')) {
      const [key, value] = line.split(':').map(part => part.trim());
      parsedObject[key] = value;
    }
  });

  parsedObject.content = content;

  return parsedObject;
}

export { parseObj };