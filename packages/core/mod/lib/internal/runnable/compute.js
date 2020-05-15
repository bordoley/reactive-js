import { pipe } from "../../functions.js";
import { fromValue } from "./fromValue.js";
import { createRunnable } from "./createRunnable.js";
export const compute = (f) => createRunnable(sink => pipe(f(), fromValue).run(sink));
