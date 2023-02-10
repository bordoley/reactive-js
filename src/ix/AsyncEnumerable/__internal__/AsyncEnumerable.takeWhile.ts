import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile";
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
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator_mixin from "../../__internal__/DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT";

const AsyncEnumerable_takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const TakeWhileAsyncEnumerator_obs = Symbol("TakeWhileAsyncEnumerator_obs");

    type TProperties = {
      readonly [TakeWhileAsyncEnumerator_obs]: MulticastObservableLike<T>;
    };

    const createTakeWhileAsyncEnumerator = createInstanceFactory(
      mix(
        include(
          Disposable_delegatingMixin(),
          DelegatingAsyncEnumerator_mixin(),
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
          init(Disposable_delegatingMixin(), instance, delegate);
          init(DelegatingAsyncEnumerator_mixin(), instance, delegate);

          instance[TakeWhileAsyncEnumerator_obs] = pipe(
            delegate,
            Observable_takeWhile(predicate, { inclusive }),
            Observable_multicast(Dispatcher_getScheduler(delegate)),
            Disposable_add(instance),
          );
          return instance;
        },
        props<TProperties>({
          [TakeWhileAsyncEnumerator_obs]: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return MulticastObservable_getObserverCount(
              this[TakeWhileAsyncEnumerator_obs],
            );
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return MulticastObservable_getReplay(
              this[TakeWhileAsyncEnumerator_obs],
            );
          },
          [ReactiveContainerLike_sinkInto](
            this: TProperties,
            observer: ObserverLike<T>,
          ): void {
            pipe(
              this[TakeWhileAsyncEnumerator_obs],
              ReactiveContainer_sinkInto(observer),
            );
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
