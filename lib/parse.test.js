import { readFile } from "fs/promises";
import { parse } from "./parse.js";

describe("parse", () => {
  let cfLogs = "";

  beforeAll(async () => {
    cfLogs = await readFile("./test/fixtures/cloudfront.txt", "utf8");
  });

  it("should map CLF fields", () => {
    const [, , log] = cfLogs.split("\n");

    expect(parse(log)).toEqual({
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
    });
  });
});
