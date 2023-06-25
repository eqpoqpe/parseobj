const data: string = `---
name: Ryan Martin
email: l_.ll@hotmail.com
---
This is the content of the object.
It can span multiple lines.
`;

// Define the interface for the parsed object
interface ParsedObject {
  [key: string]: string;
  content: string;
}

// Parse the data into an object
const parsedObject: ParsedObject = {
  content: ''
};
const lines: string[] = data.split('\n');
let isContent: boolean = false;
let content: string = '';

lines.forEach((line: string) => {
  if (line.startsWith('---') && !isContent) {
    isContent = true;
    return;
  }

  if (isContent) {
    content += line + '\n';
  } else if (line.includes(':')) {
    const [key, value]: string[] = line.split(':').map((part: string) => part.trim());
    parsedObject[key] = value;
  }
});

parsedObject.content = content.trim();
console.log(parsedObject);
