/**
 * @jest-environment node
 */

import { runTests } from "@reactive-js/core/lib/internal/testing.jest";
import { tests as httpTests } from "../src/test/http.test";

export const tests = [httpTests];

runTests(tests);
