/** CSV helpers. */

/** Parse a single CSV line, supporting double-quoted fields that may contain commas. */
export function parseCsvLine(line: string): string[] {
  if (line.length === 0) return [];
  const fields: string[] = [];
  let i = 0;

  while (i < line.length) {
    if (line[i] === '"') {
      i++; // skip opening quote
      let field = "";
      while (i < line.length && line[i] !== '"') {
        field += line[i++];
      }
      i++; // skip closing quote
      fields.push(field);
    } else {
      const start = i;
      while (i < line.length && line[i] !== ",") i++;
      fields.push(line.slice(start, i));
    }
    if (i < line.length && line[i] === ",") {
      i++;
      if (i === line.length) fields.push(""); // trailing comma → empty last field
    }
  }

  return fields;
}
