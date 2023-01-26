import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer$takeWhile from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile";
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
import MulticastObservable$getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable$getReplay from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay";
import Observable$multicast from "../../../rx/__internal__/Observable/Observable.multicast";
import Observable$takeWhile from "../../../rx/__internal__/Observable/Observable.takeWhile";
import ReactiveContainer$sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Dispatcher$getScheduler from "../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator$mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable$liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable$takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly obs: MulticastObservableLike<T>;
    };

    const createTakeWhileAsyncEnumerator = createInstanceFactory(
      mix(
        include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()),
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
          init(Disposable$delegatingMixin, instance, delegate);
          init(DelegatingAsyncEnumerator$mixin(), instance, delegate);

          instance.obs = pipe(
            delegate,
            Observable$takeWhile(predicate, { inclusive }),
            Observable$multicast(Dispatcher$getScheduler(delegate)),
            Disposable$add(instance),
          );
          return instance;
        },
        props<TProperties>({
          obs: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return MulticastObservable$getObserverCount(this.obs);
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return MulticastObservable$getReplay(this.obs);
          },
          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<T>,
          ): void {
            pipe(this.obs, ReactiveContainer$sinkInto(observer));
          },
        },
      ),
    );

    return pipe(
      createTakeWhileAsyncEnumerator,
      StatefulContainer$takeWhile<AsyncEnumerableLike, T, TInteractive>(
        AsyncEnumerable$liftT,
      ),
    );
  })();

export default AsyncEnumerable$takeWhile;
