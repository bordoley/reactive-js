import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { Factory, none, partial, pipe, unsafeCast } from "../../../functions";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "../../../ix";
import {
  AsyncReducer,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObserverLike,
  ReactiveContainerLike_sinkInto,
  ScanAsync,
} from "../../../rx";
import MulticastObservable$getObserverCount from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount";
import MulticastObservable$getReplay from "../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay";
import Observable$multicast from "../../../rx/__internal__/Observable/Observable.multicast";
import Observable$scanAsync from "../../../rx/__internal__/Observable/Observable.scanAsync";
import ReactiveContainer$sinkInto from "../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto";
import Dispatcher$getScheduler from "../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import DelegatingAsyncEnumerator$mixin from "../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin";
import AsyncEnumerable$lift from "./AsyncEnumerable.lift";

const AsyncEnumerable$scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = /*@__PURE__*/ (<T, TAcc>() => {
  type TProperties = {
    readonly obs: MulticastObservableLike<TAcc>;
  };

  const creatScanAsyncAsyncEnumerator = createInstanceFactory(
    mix(
      include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()),
      function ScanAsyncAsyncEnumerator(
        instance: Pick<
          AsyncEnumeratorLike<TAcc>,
          | typeof ReactiveContainerLike_sinkInto
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: AsyncEnumeratorLike<T>,
        reducer: AsyncReducer<ObservableLike, T, TAcc>,
        initialValue: Factory<TAcc>,
      ): AsyncEnumeratorLike<TAcc> {
        init(Disposable$delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator$mixin(), instance, delegate);

        instance.obs = pipe(
          delegate,
          Observable$scanAsync(reducer, initialValue),
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
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(this.obs, ReactiveContainer$sinkInto(observer));
        },
      },
    ),
  );

  return (
    reducer: AsyncReducer<ObservableLike, T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
    pipe(
      creatScanAsyncAsyncEnumerator,
      partial(reducer, initialValue),
      AsyncEnumerable$lift,
    );
})();

export default AsyncEnumerable$scanAsync;
