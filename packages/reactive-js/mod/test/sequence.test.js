import { describe } from "../lib/experimental/testing.js";
import * as Sequence from "../lib/sequence.js";
import { createMonadTests } from "./monad.test.js";
export const tests = describe("sequence", createMonadTests(Sequence));
