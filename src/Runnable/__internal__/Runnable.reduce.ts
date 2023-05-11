import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import type * as Runnable from "../../Runnable.js";
import { Factory, Reducer, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_reduce: Runnable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (runnable: RunnableLike<T>) => {
    let acc = initialValue();

    pipe(
      runnable,
      Observable_forEach((next: T) => {
        acc = reducer(acc, next);
      }),
      Runnable_run(),
    );

    return acc;
  };

export default Runnable_reduce;
