import { Factory, pipe } from "../../functions.ts";
import { fromValue } from "./fromValue.ts";
import { RunnableLike } from "./interfaces.ts";
import { createRunnable } from "./createRunnable.ts";

export const compute = <T>(f: Factory<T>): RunnableLike<T> =>
  createRunnable(sink => pipe(f(), fromValue).run(sink));
