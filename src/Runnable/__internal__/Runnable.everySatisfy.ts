import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import type * as Runnable from "../../Runnable.js";
import { Predicate, isTrue, pipe } from "../../functions.js";
import {
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableLike,
} from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_everySatisfy: Runnable.Signature["everySatisfy"] =
  <T>(predicate: Predicate<T>) =>
  (runnable: RunnableLike<T>) => {
    if (Observable_isEnumerable(runnable)) {
      const enumerator = runnable[EnumerableLike_enumerate]();
      let result = true;
      while (enumerator[EnumeratorLike_move]()) {
        const next = enumerator[EnumeratorLike_current];
        result = predicate(next);

        if (!result) {
          break;
        }
      }
      return result;
    } else {
      let result = true;

      pipe(
        runnable,
        Observable_map(predicate),
        Observable_forEach((next: boolean) => {
          result = next;
        }),
        Observable_takeWhile(isTrue),
        Runnable_run(),
      );

      return result;
    }
  };

export default Runnable_everySatisfy;
