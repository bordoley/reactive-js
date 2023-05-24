import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import type * as Observable from "../../Observable.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import {
  bindMethod,
  invoke,
  partial,
  pipe,
  pipeLazy,
} from "../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  EnumerableLike_enumerate,
  ObservableLike,
} from "../../types.js";
import Observable_enqueue from "./Observable.enqueue.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";

const Observable_dispatchTo: Observable.Signature["dispatchTo"] = (<T>(
  dispatcher: DispatcherLike<T>,
) => {
  const lift = pipe(
    Observer_createDispatchToObserver,
    partial(dispatcher),
    Observable_liftRunnableUpperBounded,
  );

  return (observable: ObservableLike<T>) =>
    Observable_isEnumerable(observable)
      ? Enumerable_create(
          pipeLazy(
            observable,
            Observable_enqueue(dispatcher),
            invoke(EnumerableLike_enumerate),
            Disposable_onComplete(
              bindMethod(dispatcher, DispatcherLike_complete),
            ),
          ),
          false,
        )
      : lift(observable);
}) as Observable.Signature["dispatchTo"];

export default Observable_dispatchTo;
