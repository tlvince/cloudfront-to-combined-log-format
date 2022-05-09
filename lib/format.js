const fields = [
  "host",
  "ident",
  "authuser",
  "date",
  "request",
  "status",
  "bytes",
  "referer",
  "userAgent",
];

export const format = (log) => fields.map((field) => log[field]).join(" ");
