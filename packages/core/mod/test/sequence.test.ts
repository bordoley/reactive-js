import * as Sequence from "../lib/sequence.ts";
import { createMonadTests } from "./monad.test.ts";
import { describe } from "../lib/internal/testing.ts";

export const tests = describe("sequence", createMonadTests(Sequence));
