import { RunnableLike } from "../../../computations.js";
import { Factory, Reducer, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_reduce from "./Runnable.reduce.js";

const Runnable_reduceAsync: Runnable.Signature["reduceAsync"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  async (runnable: RunnableLike<T>) => {
    await Promise.resolve();

    return pipe(runnable, Runnable_reduce(reducer, initialValue));
  };

export default Runnable_reduceAsync;
