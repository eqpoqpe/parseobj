const data = `---
name: Ryan Martin
email: l_.ll@hotmail.com
---`;

const parsedObject = {};
const lines = data.split('\n');
let currentKey = '';
lines.forEach(line => {
  if (line.startsWith('---')) {
    return;
  } else if (line.includes(':')) {
    const [key, value] = line.split(':').map(part => part.trim());
    currentKey = key;
    parsedObject[key] = value;
  } else if (currentKey && line.trim() !== '') {
    parsedObject[currentKey] += `\n${line.trim()}`;
  }
});

console.log(parsedObject);