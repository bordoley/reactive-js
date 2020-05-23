import { describe } from "./experimental/testing.js";
import { createMonadTests } from "./monad.test.js";
import * as Sequence from "./sequence.js";
export const tests = describe("sequence", createMonadTests(Sequence));
