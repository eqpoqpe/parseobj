const data = `---
name: Ryan Martin
email: l_.ll@hotmail.com
---
This is the content of the object.
It can span multiple lines.
`;

const parsedObject = {};
const lines = data.split('\n');
let isContent = false;
let content = '';

lines.forEach(line => {
  if (line.startsWith('---') && !isContent) {
    isContent = true;
    return;
  }

  if (isContent) {
    content += line + '\n';
  } else if (line.includes(':')) {
    const [key, value] = line.split(':').map(part => part.trim());
    parsedObject[key] = value;
  }
});

parsedObject.content = content.trim();
console.log(parsedObject);
