import Disposable_raiseIfDisposedWithError from "../../Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import type * as Observable from "../../Observable.js";
import Observable_run from "../../Observable/__internal__/Observable.run.js";
import { Function1, newInstance, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  EnumerableLike_enumerate,
  EnumeratorLike_current,
  EnumeratorLike_move,
  RunnableBaseLike,
} from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";

const Observable_toReadonlySet: Observable.Signature["toReadonlySet"] =
  <T>(): Function1<RunnableBaseLike<T>, ReadonlySet<T>> =>
  observable => {
    if (Observable_isEnumerable(observable)) {
      const result: Set<T> = newInstance<Set<T>>(Set);

      const enumerator = observable[EnumerableLike_enumerate]();
      while (enumerator[EnumeratorLike_move]()) {
        result.add(enumerator[EnumeratorLike_current]);
      }

      // bump the enumerator again to ensure it has completed.
      // really only need to drive up unit test coverage
      enumerator[EnumeratorLike_move]();

      enumerator[DisposableLike_dispose]();
      Disposable_raiseIfDisposedWithError(enumerator);

      return result;
    } else {
      const result: Set<T> = newInstance<Set<T>>(Set);

      pipe(
        observable,
        Observable_forEach((next: T) => {
          result.add(next);
        }),
        Observable_run(),
      );

      return result;
    }
  };

export default Observable_toReadonlySet;
