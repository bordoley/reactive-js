import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import {
  Factory,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix.js";
import {
  AsyncReducer,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ScanAsync,
} from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingAsyncEnumerator_mixin from "../../AsyncEnumerator/__internal__/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanAsyncAsyncEnumerator_obs = Symbol("ScanAsyncAsyncEnumerator_obs");

  type TProperties = {
    readonly [ScanAsyncAsyncEnumerator_obs]: MulticastObservableLike<TAcc>;
  };

  const creatScanAsyncAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()),
      function ScanAsyncAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TAcc>,
          | typeof ObservableLike_observe
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<T>,
        reducer: AsyncReducer<ObservableLike, T, TAcc>,
        initialValue: Factory<TAcc>,
      ): AsyncEnumeratorLike<TAcc> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

        instance[ScanAsyncAsyncEnumerator_obs] = pipe(
          delegate,
          Observable_scanAsync(reducer, initialValue),
          Observable_multicast(Dispatcher_getScheduler(delegate)),
        );
        return instance;
      },
      props<TProperties>({
        [ScanAsyncAsyncEnumerator_obs]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getObserverCount(
            this[ScanAsyncAsyncEnumerator_obs],
          );
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getReplay(
            this[ScanAsyncAsyncEnumerator_obs],
          );
        },
        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(
            this[ScanAsyncAsyncEnumerator_obs],
            Observable_observeWith(observer),
          );
        },
      },
    ),
  );

  return (
    reducer: AsyncReducer<ObservableLike, T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
    pipe(
      creatScanAsyncAsyncEnumerator,
      partial(reducer, initialValue),
      // FIXME: Implement as higherOrder so that we can
      // add special cases for Runnable/EnumerableObservable
      AsyncEnumerable_lift(false, false),
    );
})();

export default AsyncEnumerable_scanAsync;
