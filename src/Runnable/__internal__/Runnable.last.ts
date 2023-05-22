import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import type * as Runnable from "../../Runnable.js";
import { Optional, none, pipe } from "../../functions.js";
import {
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableLike,
} from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_last: Runnable.Signature["last"] =
  <T>() =>
  (src: RunnableLike<T>) => {
    if (Observable_isEnumerable(src)) {
      const enumerator = src[EnumerableLike_enumerate]();
      let last: Optional<T> = none;
      while (enumerator[EnumeratorLike_move]()) {
        last = enumerator[EnumeratorLike_current];
      }
      return last;
    } else {
      let result: Optional<T> = none;

      pipe(
        src,
        Observable_forEach((next: T) => {
          result = next;
        }),
        Runnable_run(),
      );
      return result;
    }
  };

export default Runnable_last;
