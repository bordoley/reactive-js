import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator, Map } from "../../../containers";
import StatefulContainer_map from "../../../containers/__internal__/StatefulContainer/StatefulContainer.map";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Function1, none, pipe, unsafeCast } from "../../../functions";
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
import Observable_map from "../../../rx/__internal__/Observable/Observable.map";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator_mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable_map: Map<AsyncEnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const MapAsyncEnumerator_op = Symbol("MapAsyncEnumerator_op");

  type TProperties = {
    readonly [MapAsyncEnumerator_op]: ContainerOperator<ObservableLike, TA, TB>;
  };

  const createMapAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()),
      function MapAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TB>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<TA>,
        mapper: Function1<TA, TB>,
      ): AsyncEnumeratorLike<TB> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

        instance[MapAsyncEnumerator_op] = Observable_map(mapper);
        return instance;
      },
      props<TProperties>({
        [MapAsyncEnumerator_op]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<AsyncEnumeratorLike<TA>>>(this);
          return MulticastObservable_getObserverCount(
            this[DelegatingLike_delegate],
          );
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<DelegatingLike<AsyncEnumeratorLike<TA>>>(this);
          return MulticastObservable_getReplay(this[DelegatingLike_delegate]);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties & DelegatingLike<AsyncEnumeratorLike<TA>>,
          observer: ObserverLike<TB>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
            this[MapAsyncEnumerator_op],
            ReactiveContainer_sinkInto(observer),
          );
        },
      },
    ),
  );

  return pipe(
    createMapAsyncEnumerator,
    StatefulContainer_map<AsyncEnumerableLike, TA, TB, TInteractive>(
      AsyncEnumerable_liftT,
    ),
  );
})();

export default AsyncEnumerable_map;
