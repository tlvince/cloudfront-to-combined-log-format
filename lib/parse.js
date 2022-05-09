const fields = {
  date: 0,
  time: 1,
  "x-edge-location": 2,
  "sc-bytes": 3,
  "c-ip": 4,
  "cs-method": 5,
  "cs(Host)": 6,
  "cs-uri-stem": 7,
  "sc-status": 8,
  "cs(Referer)": 9,
  "cs(User-Agent)": 10,
  "cs-uri-query": 11,
  "cs(Cookie)": 12,
  "x-edge-result-type": 13,
  "x-edge-request-id": 14,
  "x-host-header": 15,
  "cs-protocol": 16,
  "cs-bytes": 17,
  "time-taken": 18,
  "x-forwarded-for": 19,
  "ssl-protocol": 20,
  "ssl-cipher": 21,
  "x-edge-response-result-type": 22,
  "cs-protocol-version": 23,
  "fle-status": 24,
  "fle-encrypted-fields": 25,
  "c-port": 26,
  "time-to-first-byte": 27,
  "x-edge-detailed-result-type": 28,
  "sc-content-type": 29,
  "sc-content-len": 30,
  "sc-range-start": 31,
  "sc-range-end": 32,
};

export const parse = (line) => {
  const entries = line.split("\t");

  const date = entries[fields["date"]];
  const time = entries[fields["time"]];
  const datetime = new Date(`${date}T${time}.000Z`);

  return {
    host: entries[fields["c-ip"]],
    ident: "-",
    authuser: "-",
    date: `[${`${datetime.getDay()}`.padStart(
      2,
      "0"
    )}/${datetime.toLocaleString("en-US", {
      month: "short",
    })}/${datetime.getFullYear()}:${entries[fields["time"]]} +0000]`,
    request: `"${entries[fields["cs-method"]]} ${
      entries[fields["cs-uri-stem"]]
    } ${entries[fields["cs-protocol-version"]]}"`,
    status: entries[fields["sc-status"]],
    bytes: entries[fields["sc-bytes"]],
    referer: `"${entries[fields["cs(Referer)"]]}"`,
    userAgent: `"${decodeURIComponent(entries[fields["cs(User-Agent)"]])}"`,
  };
};
