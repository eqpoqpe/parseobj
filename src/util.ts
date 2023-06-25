function splitContent(data: string): [string, number] {
  const contentStartIndex = data.indexOf("---", data.indexOf("---") + 1) + 3;
  const content = data.substring(contentStartIndex).trim();

  return [content, contentStartIndex];
}

function splitMetadata(data: string, startIndex: number): Array<string> {
  const metadata = data.substring(data.indexOf("---") + 3, startIndex - 3).trim();
  const lines = metadata.split('\n');

  return lines;
}

export {
  splitContent,
  splitMetadata
};