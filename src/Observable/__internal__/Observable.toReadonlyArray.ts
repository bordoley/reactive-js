import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import type * as Observable from "../../Observable.js";
import Observable_run from "../../Observable/__internal__/Observable.run.js";
import { Function1, bind, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableBaseLike,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

const Observable_toReadonlyArray: Observable.Signature["toReadonlyArray"] =
  <T>(): Function1<RunnableBaseLike<T>, ReadonlyArray<T>> =>
  observable => {
    if (Observable_isEnumerable(observable)) {
      const result: T[] = [];

      const enumerator = observable[EnumerableLike_enumerate]();
      while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
      }

      // bump the enumerator again to ensure it has completed.
      // really only need to drive up unit test coverage
      enumerator[EnumeratorLike_move]();

      enumerator[DisposableLike_dispose]();
      Disposable_raiseIfDisposedWithError(enumerator);

      return result;
    } else {
      const result: T[] = [];

      pipe(
        observable,
        Observable_forEach(bind(Array.prototype.push, result)),
        Observable_run(),
      );

      return result;
    }
  };

export default Observable_toReadonlyArray;
