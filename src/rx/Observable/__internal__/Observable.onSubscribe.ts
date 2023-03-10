import {
  Factory,
  identity,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import { ObservableLike, ObservableLike_observe } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import { DisposableOrTeardown } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";

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
