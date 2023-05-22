import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import type * as Runnable from "../../Runnable.js";
import { Factory, Reducer, pipe } from "../../functions.js";
import {
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableLike,
} from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_reduce: Runnable.Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (runnable: RunnableLike<T>) => {
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
        Runnable_run(),
      );

      return acc;
    }
  };

export default Runnable_reduce;
