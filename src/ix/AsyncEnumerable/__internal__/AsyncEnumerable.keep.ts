import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep";
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
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator_mixin from "../../__internal__/DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT";

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
              pipe(delegate, Dispatcher_dispatch(none));
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
    StatefulContainer_keep<AsyncEnumerableLike, T, TInteractive>(
      AsyncEnumerable_liftT,
    ),
  );
})();

export default AsyncEnumerable_keep;
