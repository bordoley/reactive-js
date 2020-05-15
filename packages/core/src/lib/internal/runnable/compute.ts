import { Factory, pipe } from "../../functions";
import { fromValue } from "./fromValue";
import { RunnableLike } from "./interfaces";
import { createRunnable } from "./createRunnable";

export const compute = <T>(f: Factory<T>): RunnableLike<T> =>
  createRunnable(sink => pipe(f(), fromValue).run(sink));
