import { Factory, Function, pipe } from "../../functions.ts";
import { fromValue } from "./fromValue.ts";
import { RunnableLike } from "./interfaces.ts";
import { createRunnable } from "./createRunnable.ts";

const _compute = <T>(f: Factory<T>): RunnableLike<T> =>
  createRunnable(sink => pipe(f(), fromValue()).run(sink));

export const compute = <T>(): Function<Factory<T>, RunnableLike<T>> => _compute;
