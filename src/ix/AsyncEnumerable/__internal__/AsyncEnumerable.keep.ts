import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Keep } from "../../../containers.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { Predicate, none, pipe, unsafeCast } from "../../../functions.js";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
} from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
import DelegatingAsyncEnumerator_mixin from "../../AsyncEnumerator/__internal__/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_keep: Keep<AsyncEnumerableLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  const KeepAsyncEnumerator_obs = Symbol("KeepAsyncEnumerator_obs");

  type TProperties = {
    readonly [KeepAsyncEnumerator_obs]: MulticastObservableLike<T>;
  };

  const createKeepAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()),
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
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

        instance[KeepAsyncEnumerator_obs] = pipe(
          delegate,
          Observable_forEach(x => {
            if (!predicate(x)) {
              pipe(delegate, Queue_push(none));
            }
          }),
          Observable_keep(predicate),
          Observable_multicast(Dispatcher_getScheduler(delegate)),
        );
        return instance;
      },
      props<TProperties>({
        [KeepAsyncEnumerator_obs]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getObserverCount(
            this[KeepAsyncEnumerator_obs],
          );
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return MulticastObservable_getReplay(this[KeepAsyncEnumerator_obs]);
        },
        [ReactiveContainerLike_sinkInto](
          this: TProperties,
          observer: ObserverLike<T>,
        ): void {
          pipe(
            this[KeepAsyncEnumerator_obs],
            ReactiveContainer_sinkInto(observer),
          );
        },
      },
    ),
  );

  return pipe(
    createKeepAsyncEnumerator,
    StatefulContainer_keep<AsyncEnumerableLike, T>(
      AsyncEnumerable_lift(true, true),
    ),
  );
})();

export default AsyncEnumerable_keep;
