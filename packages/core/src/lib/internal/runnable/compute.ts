import { Factory, Function, pipe } from "../../functions";
import { fromValue } from "./fromValue";
import { RunnableLike } from "./interfaces";
import { createRunnable } from "./createRunnable";

const _compute = <T>(f: Factory<T>): RunnableLike<T> =>
  createRunnable(sink => pipe(f(), fromValue()).run(sink));

export const compute = <T>(): Function<Factory<T>, RunnableLike<T>> => _compute;
