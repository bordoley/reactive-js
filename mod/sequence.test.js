import { describe } from "./experimental/testing.js";
import * as Sequence from "./sequence.js";
import { createMonadTests } from "./monad.test.js";
export const tests = describe("sequence", createMonadTests(Sequence));
