import { describe } from "./experimental/testing";
import { createMonadTests } from "./monad.test";
import * as Sequence from "./sequence";

export const tests = describe("sequence", createMonadTests(Sequence));
