import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { Factory, none, partial, pipe, unsafeCast } from "../../../functions";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix";
import {
  AsyncReducer,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  ScanAsync,
} from "../../../rx";
import MulticastObservable_getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable_getReplay from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay";
import Observable_multicast from "../../../rx/__internal__/Observable/Observable.multicast";
import Observable_scanAsync from "../../../rx/__internal__/Observable/Observable.scanAsync";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Dispatcher_getScheduler from "../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator_mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift";

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
          | typeof ReactiveContainerLike_sinkInto
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
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(
            this[ScanAsyncAsyncEnumerator_obs],
            ReactiveContainer_sinkInto(observer),
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
      AsyncEnumerable_lift,
    );
})();

export default AsyncEnumerable_scanAsync;
