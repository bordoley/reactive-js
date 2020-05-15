import { pipe } from "../../functions.js";
import { fromValue } from "./fromValue.js";
import { createRunnable } from "./createRunnable.js";
const _compute = (f) => createRunnable(sink => pipe(f(), fromValue()).run(sink));
export const compute = () => _compute;
