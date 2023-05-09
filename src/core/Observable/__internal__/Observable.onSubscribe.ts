import {
  Containers,
  DeferredObservableContainer,
  DisposableOrTeardown,
  EnumerableContainer,
  ObservableContainer,
  ObservableLike,
  ObservableLike_observe,
  RunnableContainer,
  SharedObservableContainer,
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
import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";

interface ObservableOnSubscribe {
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<EnumerableContainer, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<RunnableContainer, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<DeferredObservableContainer, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<SharedObservableContainer, T, T>;
  onSubscribe<T>(
    f: Factory<DisposableOrTeardown | void>,
  ): Containers.Operator<ObservableContainer, T, T>;
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
