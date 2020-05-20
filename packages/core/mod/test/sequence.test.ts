import { describe } from "../lib/internal/testing.ts";
import * as Sequence from "../lib/sequence.ts";
import { createMonadTests } from "./monad.test.ts";

export const tests = describe("sequence", createMonadTests(Sequence));
