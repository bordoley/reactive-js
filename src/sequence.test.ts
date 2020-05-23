import { describe } from "./experimental/testing";
import * as Sequence from "./sequence";
import { createMonadTests } from "./monad.test";

export const tests = describe("sequence", createMonadTests(Sequence));
