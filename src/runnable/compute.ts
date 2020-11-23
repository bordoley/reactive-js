import { Factory, Function1, pipe } from "../functions";
import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";
import { fromValue } from "./fromValue";

const _compute = <T>(f: Factory<T>): RunnableLike<T> =>
  createRunnable(sink => pipe(f(), fromValue()).run(sink));

export const compute = <T>(): Function1<Factory<T>, RunnableLike<T>> =>
  _compute;
