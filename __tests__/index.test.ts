import { parseObj } from "../src";

test("", () => {
  const data: string = `---
name: Ryan Martin
email: l_.ll@hotmail.com
---
`;

  expect(parseObj(data)).toStrictEqual({
    content: "",
    email: "l_.ll@hotmail.com",
    name: "Ryan Martin"
  });
});

test("", () => {
  const data: string = `---
name: Ryan Martin
email: l_.ll@hotmail.com
---
This is the content of the object.
It can span multiple lines.
`;

  expect(parseObj(data)).toStrictEqual({
    content: "This is the content of the object.\nIt can span multiple lines.",
    email: "l_.ll@hotmail.com",
    name: "Ryan Martin"
  });
});