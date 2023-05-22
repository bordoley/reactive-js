import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import type * as Runnable from "../../Runnable.js";
import { Function1, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableLike,
} from "../../types.js";
import Runnable_run from "./Runnable.run.js";

const Runnable_toReadonlyArray: Runnable.Signature["toReadonlyArray"] =
  <T>(): Function1<RunnableLike<T>, ReadonlyArray<T>> =>
  observable => {
    if (Observable_isEnumerable(observable)) {
      const result: T[] = [];

      const enumerator = observable[EnumerableLike_enumerate]();
      while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
      }

      enumerator[DisposableLike_dispose]();
      Disposable_raiseIfDisposedWithError(enumerator);

      return result;
    } else {
      const result: T[] = [];

      pipe(
        observable,
        Observable_forEach((next: T) => {
          result.push(next);
        }),
        Runnable_run(),
      );

      return result;
    }
  };

export default Runnable_toReadonlyArray;
