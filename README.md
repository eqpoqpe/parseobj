# parseObj
`(md) => obj` This library is used to parse Markdown text that contains metadata and content, and convert it into an object that contains the parsed result.

## Installation
```shell
npm install @eqpoqpe/parseobj
```

## Examples
```ts
const data: string = `---
name: Ryan Martin
email: l_.ll@hotmail.com
---
This is the content of the object.
It can span multiple lines.
`;

const authInfos = parseObj(data);
```
