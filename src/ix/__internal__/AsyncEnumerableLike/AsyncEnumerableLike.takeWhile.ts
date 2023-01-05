import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainerLike__takeWhile from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { Predicate, none, pipe, unsafeCast } from "../../../functions";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx";
import MulticastObservableLike__getObserverCount from "../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount";
import MulticastObservableLike__getReplay from "../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getReplay";
import ObservableLike__multicast from "../../../rx/__internal__/ObservableLike/ObservableLike.multicast";
import ObservableLike__takeWhile from "../../../rx/__internal__/ObservableLike/ObservableLike.takeWhile";
import ReactiveContainerLike__sinkInto from "../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import DispatcherLike__getScheduler from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.getScheduler";
import DisposableLike__add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DelegatingAsyncEnumerator__mixin from "../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin";
import AsyncEnumerableLike__liftT from "./AsyncEnumerableLike.liftT";

const AsyncEnumerableLike__takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly obs: MulticastObservableLike<T>;
    };

    const createTakeWhileAsyncEnumerator = createInstanceFactory(
      mix(
        include(
          DisposableLike__delegatingMixin,
          DelegatingAsyncEnumerator__mixin(),
        ),
        function TakeWhileAsyncEnumerator(
          instance: Pick<
            AsyncEnumeratorLike<T>,
            | typeof ReactiveContainerLike_sinkInto
            | typeof MulticastObservableLike_observerCount
            | typeof MulticastObservableLike_replay
          > &
            Mutable<TProperties>,
          delegate: AsyncEnumeratorLike<T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): AsyncEnumeratorLike<T> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(DelegatingAsyncEnumerator__mixin(), instance, delegate);

          instance.obs = pipe(
            delegate,
            ObservableLike__takeWhile(predicate, { inclusive }),
            ObservableLike__multicast(DispatcherLike__getScheduler(delegate)),
            DisposableLike__add(instance),
          );
          return instance;
        },
        props<TProperties>({
          obs: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return MulticastObservableLike__getObserverCount(this.obs);
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return MulticastObservableLike__getReplay(this.obs);
          },
          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<T>,
          ): void {
            pipe(this.obs, ReactiveContainerLike__sinkInto(observer));
          },
        },
      ),
    );

    return pipe(
      createTakeWhileAsyncEnumerator,
      StatefulContainerLike__takeWhile<AsyncEnumerableLike, T, TInteractive>(
        AsyncEnumerableLike__liftT,
      ),
    );
  })();

export default AsyncEnumerableLike__takeWhile;
