import { format } from "./format.js";

describe("format", () => {
  it("should format as CLF", () => {
    const log = {
      host: "113.160.226.199",
      ident: "-",
      authuser: "-",
      date: "[01/May/2022:23:53:26 +0000]",
      request: '"GET /foo.js HTTP/2.0"',
      status: "200",
      bytes: "828",
      referer: '"-"',
      userAgent:
        '"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"',
    };

    expect(format(log)).toEqual(
      '113.160.226.199 - - [01/May/2022:23:53:26 +0000] "GET /foo.js HTTP/2.0" 200 828 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"'
    );
  });
});
