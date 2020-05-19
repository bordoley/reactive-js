import * as Sequence from "../lib/sequence.js";
import { createMonadTests } from "./monad.test.js";
import { describe } from "../lib/internal/testing.js";
export const tests = describe("sequence", createMonadTests(Sequence));
