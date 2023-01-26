import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator, Map } from "../../../containers";
import StatefulContainer$map from "../../../containers/__internal__/StatefulContainer/StatefulContainer.map";
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
import MulticastObservable$getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable$getReplay from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay";
import Observable$map from "../../../rx/__internal__/Observable/Observable.map";
import ReactiveContainer$sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator$mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable$liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable$map: Map<AsyncEnumerableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  type TProperties = {
    readonly op: ContainerOperator<ObservableLike, TA, TB>;
    readonly delegate: AsyncEnumeratorLike<TA>;
  };

  const createMapAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()),
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
        init(Disposable$delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator$mixin(), instance, delegate);

        instance.delegate = delegate;
        instance.op = Observable$map(mapper);
        return instance;
      },
      props<TProperties>({
        op: none,
        delegate: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable$getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable$getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<TB>,
        ): void {
          pipe(this.delegate, this.op, ReactiveContainer$sinkInto(observer));
        },
      },
    ),
  );

  return pipe(
    createMapAsyncEnumerator,
    StatefulContainer$map<AsyncEnumerableLike, TA, TB, TInteractive>(
      AsyncEnumerable$liftT,
    ),
  );
})();

export default AsyncEnumerable$map;
