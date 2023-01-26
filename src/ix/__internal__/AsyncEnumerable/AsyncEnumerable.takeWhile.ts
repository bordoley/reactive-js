import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer_takeWhile from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile";
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
import MulticastObservable_getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable_getReplay from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay";
import Observable_multicast from "../../../rx/__internal__/Observable/Observable.multicast";
import Observable_takeWhile from "../../../rx/__internal__/Observable/Observable.takeWhile";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Dispatcher_getScheduler from "../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler";
import Disposable_add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator_mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable_takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly obs: MulticastObservableLike<T>;
    };

    const createTakeWhileAsyncEnumerator = createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, DelegatingAsyncEnumerator_mixin()),
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
          init(Disposable_delegatingMixin, instance, delegate);
          init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

          instance.obs = pipe(
            delegate,
            Observable_takeWhile(predicate, { inclusive }),
            Observable_multicast(Dispatcher_getScheduler(delegate)),
            Disposable_add(instance),
          );
          return instance;
        },
        props<TProperties>({
          obs: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return MulticastObservable_getObserverCount(this.obs);
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return MulticastObservable_getReplay(this.obs);
          },
          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<T>,
          ): void {
            pipe(this.obs, ReactiveContainer_sinkInto(observer));
          },
        },
      ),
    );

    return pipe(
      createTakeWhileAsyncEnumerator,
      StatefulContainer_takeWhile<AsyncEnumerableLike, T, TInteractive>(
        AsyncEnumerable_liftT,
      ),
    );
  })();

export default AsyncEnumerable_takeWhile;
