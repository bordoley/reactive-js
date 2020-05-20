import { describe } from "../lib/internal/testing.js";
import * as Sequence from "../lib/sequence.js";
import { createMonadTests } from "./monad.test.js";
export const tests = describe("sequence", createMonadTests(Sequence));
