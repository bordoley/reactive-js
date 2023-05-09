import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import {
  Containers,
  DeferredObservableContainer,
  EnumerableContainer,
  ObservableContainer,
  RunnableContainer,
  SharedObservableContainer,
} from "../../containers.js";
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
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";

interface ObservableOnSubscribe {
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<EnumerableContainer.Type, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<RunnableContainer.Type, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<DeferredObservableContainer.Type, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<SharedObservableContainer.Type, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<ObservableContainer.Type, T, T>;
}

// FIXME: improve return type.
const Observable_onSubscribe: ObservableOnSubscribe["onSubscribe"] = (<T>(
    f: Factory<DisposableOrTeardown | void>,
  ) =>
  (obs: ObservableLike<T>): ObservableLike<T> => {
    const create = Observable_isEnumerable(obs)
      ? Enumerable_create
      : Observable_isRunnable(obs)
      ? Runnable_create
      : Observable_isDeferred(obs)
      ? DeferredObservable_create
      : Observable_create;

    return create(observer => {
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
  }) as ObservableOnSubscribe["onSubscribe"];

export default Observable_onSubscribe;
