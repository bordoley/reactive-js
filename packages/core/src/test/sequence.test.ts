import * as Sequence from "../lib/sequence";
import { createMonadTests } from "./monad.test";
import { describe } from "../lib/internal/testing";

export const tests = describe("sequence", createMonadTests(Sequence));
