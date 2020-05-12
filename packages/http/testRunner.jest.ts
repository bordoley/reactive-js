/**
 * @jest-environment node
 */

import { runTests } from "../../scripts/jestTestRunner";
import { tests as httpTests } from "./src/test/http.test";

export const tests = [
  httpTests,
];

runTests(tests);
