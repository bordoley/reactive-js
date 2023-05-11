import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import type * as Observable from "../../Observable.js";
import {
  Factory,
  identity,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import {
  DisposableOrTeardown,
  ObservableLike,
  ObservableLike_observe,
} from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_onSubscribe: Observable.Signature["onSubscribe"] = (<T>(
    f: Factory<DisposableOrTeardown | void>,
  ) =>
  (obs: ObservableLike<T>): ObservableLike<T> =>
    Observable_createWithConfig(observer => {
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
    }, obs)) as Observable.Signature["onSubscribe"];

export default Observable_onSubscribe;
