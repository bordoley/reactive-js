import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator, Scan } from "../../../containers.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { TInteractive } from "../../../containers/__internal__/containers.internal.js";
import {
  Factory,
  Reducer,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix.js";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingAsyncEnumerator_mixin from "../../AsyncEnumerator/__internal__/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT.js";

const AsyncEnumerable_scan: Scan<AsyncEnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const ScanAsyncEnumerator_op = Symbol("ScanAsyncEnumerator_op");

  type TProperties = {
    readonly [ScanAsyncEnumerator_op]: ContainerOperator<
      ObservableLike,
      T,
      TAcc
    >;
  };

  const createScanAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()),
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
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

        instance[ScanAsyncEnumerator_op] = Observable_scan(reducer, acc);
        return instance;
      },
      props<TProperties>({
        [ScanAsyncEnumerator_op]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<AsyncEnumeratorLike<T>>>(this);
          return MulticastObservable_getObserverCount(
            this[DelegatingLike_delegate],
          );
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<DelegatingLike<AsyncEnumeratorLike<T>>>(this);
          return MulticastObservable_getReplay(this[DelegatingLike_delegate]);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties & DelegatingLike<AsyncEnumeratorLike<T>>,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
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
