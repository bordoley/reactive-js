import type * as Observable from "../../Observable.js";
import { Factory, Reducer, pipe } from "../../functions.js";
import {
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableBaseLike,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_run from "./Observable.run.js";

const Observable_reduce: Observable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (runnable: RunnableBaseLike<T>) => {
    if (Observable_isEnumerable(runnable)) {
      const enumerator = runnable[EnumerableLike_enumerate]();
      let acc = initialValue();
      while (enumerator[EnumeratorLike_move]()) {
        const next = enumerator[EnumeratorLike_current];
        acc = reducer(acc, next);
      }
      return acc;
    } else {
      let acc = initialValue();

      pipe(
        runnable,
        Observable_forEach((next: T) => {
          acc = reducer(acc, next);
        }),
        Observable_run(),
      );

      return acc;
    }
  };

export default Observable_reduce;
