import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import type * as Observable from "../../Observable.js";
import {
  Factory,
  Optional,
  SideEffect1,
  identity,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import {
  DisposableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_onSubscribe: Observable.Signature["onSubscribe"] = (<T>(
    f: Factory<DisposableLike | SideEffect1<Optional<Error>> | void>,
  ) =>
  (obs: ObservableLike<T>) =>
    Observable_createWithConfig(
      (observer: ObserverLike<T>) => {
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
      },
      {
        [ObservableLike_isRunnable]: obs[ObservableLike_isRunnable],
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: false,
      },
    )) as Observable.Signature["onSubscribe"];

export default Observable_onSubscribe;
