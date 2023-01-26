import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer$keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
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
import Observable$forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable$keep from "../../../rx/__internal__/Observable/Observable.keep";
import Observable$multicast from "../../../rx/__internal__/Observable/Observable.multicast";
import ReactiveContainer$sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Dispatcher$dispatch from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch";
import Dispatcher$getScheduler from "../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator$mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable$liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable$keep: Keep<AsyncEnumerableLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    readonly obs: MulticastObservableLike<T>;
  };

  const createKeepAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()),
      function KeepAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<T>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<T>,
        predicate: Predicate<T>,
      ): AsyncEnumeratorLike<T> {
        init(Disposable$delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator$mixin(), instance, delegate);

        instance.obs = pipe(
          delegate,
          Observable$forEach(x => {
            if (!predicate(x)) {
              pipe(delegate, Dispatcher$dispatch(none));
            }
          }),
          Observable$keep(predicate),
          Observable$multicast(Dispatcher$getScheduler(delegate)),
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
    createKeepAsyncEnumerator,
    StatefulContainer$keep<AsyncEnumerableLike, T, TInteractive>(
      AsyncEnumerable$liftT,
    ),
  );
})();

export default AsyncEnumerable$keep;
