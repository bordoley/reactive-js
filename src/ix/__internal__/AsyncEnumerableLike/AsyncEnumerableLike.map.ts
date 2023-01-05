import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator, Map } from "../../../containers";
import StatefulContainerLike__map from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
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
import MulticastObservableLike__getObserverCount from "../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount";
import MulticastObservableLike__getReplay from "../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getReplay";
import ObservableLike__map from "../../../rx/__internal__/ObservableLike/ObservableLike.map";
import ReactiveContainerLike__sinkInto from "../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DelegatingAsyncEnumerator__mixin from "../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin";
import AsyncEnumerableLike__liftT from "./AsyncEnumerableLike.liftT";

const AsyncEnumerableLike__map: Map<AsyncEnumerableLike>["map"] =
  /*@__PURE__*/ (<TA, TB>() => {
    type TProperties = {
      readonly op: ContainerOperator<ObservableLike, TA, TB>;
      readonly delegate: AsyncEnumeratorLike<TA>;
    };

    const createMapAsyncEnumerator = createInstanceFactory(
      mix(
        include(
          DisposableLike__delegatingMixin,
          DelegatingAsyncEnumerator__mixin(),
        ),
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
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(DelegatingAsyncEnumerator__mixin(), instance, delegate);

          instance.delegate = delegate;
          instance.op = ObservableLike__map(mapper);
          return instance;
        },
        props<TProperties>({
          op: none,
          delegate: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return MulticastObservableLike__getObserverCount(this.delegate);
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return MulticastObservableLike__getReplay(this.delegate);
          },
          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<TB>,
          ): void {
            pipe(
              this.delegate,
              this.op,
              ReactiveContainerLike__sinkInto(observer),
            );
          },
        },
      ),
    );

    return pipe(
      createMapAsyncEnumerator,
      StatefulContainerLike__map<AsyncEnumerableLike, TA, TB, TInteractive>(
        AsyncEnumerableLike__liftT,
      ),
    );
  })();

export default AsyncEnumerableLike__map;
