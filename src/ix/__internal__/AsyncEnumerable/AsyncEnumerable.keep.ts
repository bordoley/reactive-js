import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer_keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
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
import Observable_forEach from "../../../rx/__internal__/Observable/Observable.forEach";
import Observable_keep from "../../../rx/__internal__/Observable/Observable.keep";
import Observable_multicast from "../../../rx/__internal__/Observable/Observable.multicast";
import ReactiveContainer_sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Dispatcher_dispatch from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch";
import Dispatcher_getScheduler from "../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator_mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable_keep: Keep<AsyncEnumerableLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    readonly obs: MulticastObservableLike<T>;
  };

  const createKeepAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin, DelegatingAsyncEnumerator_mixin()),
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
        init(Disposable_delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

        instance.obs = pipe(
          delegate,
          Observable_forEach(x => {
            if (!predicate(x)) {
              pipe(delegate, Dispatcher_dispatch(none));
            }
          }),
          Observable_keep(predicate),
          Observable_multicast(Dispatcher_getScheduler(delegate)),
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
    createKeepAsyncEnumerator,
    StatefulContainer_keep<AsyncEnumerableLike, T, TInteractive>(
      AsyncEnumerable_liftT,
    ),
  );
})();

export default AsyncEnumerable_keep;
