#!/usr/bin/env node

import { createInterface } from "readline";

import { parse } from "./lib/parse.js";
import { format } from "./lib/format.js";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

readline.on("line", (line) => process.stdout.write(`${format(parse(line))}\n`));
