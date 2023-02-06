import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator, Scan } from "../../../containers";
import StatefulContainer_scan from "../../../containers/__internal__/StatefulContainer/StatefulContainer.scan";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Factory, Reducer, none, pipe, unsafeCast } from "../../../functions";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx";
import MulticastObservable_getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable_getReplay from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay";
import Observable_scan from "../../../rx/__internal__/Observable/Observable.scan";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator_mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable_scan: Scan<AsyncEnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const ScanAsyncEnumerator_op = Symbol("ScanAsyncEnumerator_op");
  const ScanAsyncEnumerator_delegate = Symbol("ScanAsyncEnumerator_delegate");

  type TProperties = {
    readonly [ScanAsyncEnumerator_op]: ContainerOperator<
      ObservableLike,
      T,
      TAcc
    >;
    readonly [ScanAsyncEnumerator_delegate]: AsyncEnumeratorLike<T>;
  };

  const createScanAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin, DelegatingAsyncEnumerator_mixin()),
      function ScanAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TAcc>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<T>,
        reducer: Reducer<T, TAcc>,
        acc: Factory<TAcc>,
      ): AsyncEnumeratorLike<TAcc> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

        instance[ScanAsyncEnumerator_delegate] = delegate;
        instance[ScanAsyncEnumerator_op] = Observable_scan(reducer, acc);
        return instance;
      },
      props<TProperties>({
        [ScanAsyncEnumerator_op]: none,
        [ScanAsyncEnumerator_delegate]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getObserverCount(
            this[ScanAsyncEnumerator_delegate],
          );
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getReplay(
            this[ScanAsyncEnumerator_delegate],
          );
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(
            this[ScanAsyncEnumerator_delegate],
            this[ScanAsyncEnumerator_op],
            ReactiveContainer_sinkInto(observer),
          );
        },
      },
    ),
  );

  return pipe(
    createScanAsyncEnumerator,
    StatefulContainer_scan<AsyncEnumerableLike, T, TAcc, TInteractive>(
      AsyncEnumerable_liftT,
    ),
  );
})();

export default AsyncEnumerable_scan;
