import {
  DisposableOrTeardown,
  ObservableLike,
  ObservableLike_observe,
} from "../../../core.js";
import Disposable_add from "../../../core/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import Observable_create from "../../../core/Observable/__internal__/Observable.create.js";
import {
  Factory,
  identity,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";

const Observable_onSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>): ObservableLike<T> =>
    Observable_create(observer => {
      obs[ObservableLike_observe](observer);

      const disposable = f() || none;
      pipe(
        observer,
        isFunction(disposable)
          ? Disposable_onDisposed(disposable)
          : isSome(disposable)
          ? Disposable_add(disposable)
          : identity,
      );
    });

export default Observable_onSubscribe;
