import { describe } from "./experimental/testing.ts";
import * as Sequence from "./sequence.ts";
import { createMonadTests } from "./monad.test.ts";

export const tests = describe("sequence", createMonadTests(Sequence));
