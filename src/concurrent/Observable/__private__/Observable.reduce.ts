import { RunnableLike } from "../../../concurrent.js";
import { Factory, Reducer, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";

const Observable_reduce: Observable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (runnable: RunnableLike<T>) => {
    let acc = initialValue();

    pipe(
      runnable,
      Observable_forEach((next: T) => {
        acc = reducer(acc, next);
      }),
      Observable_run(),
    );

    return acc;
  };

export default Observable_reduce;
