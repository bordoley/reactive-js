import type * as Observable from "../../Observable.js";
import { Optional, none, pipe } from "../../functions.js";
import {
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableBaseLike,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_run from "./Observable.run.js";

const Observable_last: Observable.Signature["last"] =
  <T>() =>
  (src: RunnableBaseLike<T>) => {
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
        Observable_run(),
      );
      return result;
    }
  };

export default Observable_last;
