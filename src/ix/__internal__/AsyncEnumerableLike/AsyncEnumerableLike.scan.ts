import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator, Scan } from "../../../containers";
import StatefulContainerLike__scan from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
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
import {
  getObserverCount,
  getReplay,
} from "../../../rx/MulticastObservableLike";
import { sinkInto } from "../../../rx/ReactiveContainerLike";
import ObservableLike__scan from "../../../rx/__internal__/ObservableLike/ObservableLike.scan";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DelegatingAsyncEnumerator__mixin from "../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin";
import AsyncEnumerableLike__liftT from "./AsyncEnumerableLike.liftT";

const AsyncEnumerableLike__scan: Scan<AsyncEnumerableLike>["scan"] =
  /*@__PURE__*/ (<T, TAcc>() => {
    type TProperties = {
      readonly op: ContainerOperator<ObservableLike, T, TAcc>;
      readonly delegate: AsyncEnumeratorLike<T>;
    };

    const createScanAsyncEnumerator = createInstanceFactory(
      mix(
        include(
          DisposableLike__delegatingMixin,
          DelegatingAsyncEnumerator__mixin(),
        ),
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
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(DelegatingAsyncEnumerator__mixin(), instance, delegate);

          instance.delegate = delegate;
          instance.op = ObservableLike__scan(reducer, acc);
          return instance;
        },
        props<TProperties>({
          op: none,
          delegate: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return getObserverCount(this.delegate);
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return getReplay(this.delegate);
          },
          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<TAcc>,
          ): void {
            pipe(this.delegate, this.op, sinkInto(observer));
          },
        },
      ),
    );

    return pipe(
      createScanAsyncEnumerator,
      StatefulContainerLike__scan<AsyncEnumerableLike, T, TAcc, TInteractive>(
        AsyncEnumerableLike__liftT,
      ),
    );
  })();

export default AsyncEnumerableLike__scan;
