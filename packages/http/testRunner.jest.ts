/**
 * @jest-environment node
 */

import { runTests } from "../../scripts/jestTestRunner";
import { tests as httpTests } from "./src/test/http.test";
import { tests as parserCombinatorTests } from "./src/test/parserCombinators.test";

export const tests = [
  httpTests,
  parserCombinatorTests,
];

runTests(tests);
