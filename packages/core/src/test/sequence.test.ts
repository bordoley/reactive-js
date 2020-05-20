import { describe } from "../lib/internal/testing";
import * as Sequence from "../lib/sequence";
import { createMonadTests } from "./monad.test";

export const tests = describe("sequence", createMonadTests(Sequence));
