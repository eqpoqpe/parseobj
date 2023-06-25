import { parseObj } from "../src";

test("", () => {
  const data: string = `---
name: Ryan Martin
description: 🎉
---
`;

  expect(parseObj(data)).toStrictEqual({
    content: "",
    description: "🎉",
    name: "Ryan Martin"
  });
});

test("", () => {
  const data: string = `---
name: Ryan Martin
description: 🎉
---
This is the content of the object.
It can span multiple lines.
`;

  expect(parseObj(data)).toStrictEqual({
    content: "This is the content of the object.\nIt can span multiple lines.",
    description: "🎉",
    name: "Ryan Martin"
  });
});