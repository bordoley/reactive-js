import { pipe } from "../../functions.js";
import { createRunnable } from "./createRunnable.js";
import { fromValue } from "./fromValue.js";
const _compute = (f) => createRunnable(sink => pipe(f(), fromValue()).run(sink));
export const compute = () => _compute;
