import { describe } from "./experimental/testing.ts";
import { createMonadTests } from "./monad.test.ts";
import * as Sequence from "./sequence.ts";

export const tests = describe("sequence", createMonadTests(Sequence));
