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
import MulticastObservableLike__getObserverCount from "../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount";
import MulticastObservableLike__getReplay from "../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getReplay";
import ObservableLike__multicast from "../../../rx/__internal__/ObservableLike/ObservableLike.multicast";
import ObservableLike__scanAsync from "../../../rx/__internal__/ObservableLike/ObservableLike.scanAsync";
import ReactiveContainerLike__sinkInto from "../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import DispatcherLike__getScheduler from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.getScheduler";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DelegatingAsyncEnumerator__mixin from "../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin";
import AsyncEnumerableLike__lift from "./AsyncEnumerableLike.lift";

const AsyncEnumerableLike__scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = /*@__PURE__*/ (<T, TAcc>() => {
  type TProperties = {
    readonly obs: MulticastObservableLike<TAcc>;
  };

  const creatScanAsyncAsyncEnumerator = createInstanceFactory(
    mix(
      include(
        DisposableLike__delegatingMixin,
        DelegatingAsyncEnumerator__mixin(),
      ),
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
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator__mixin(), instance, delegate);

        instance.obs = pipe(
          delegate,
          ObservableLike__scanAsync(reducer, initialValue),
          ObservableLike__multicast(DispatcherLike__getScheduler(delegate)),
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
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(this.obs, ReactiveContainerLike__sinkInto(observer));
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
      AsyncEnumerableLike__lift,
    );
})();

export default AsyncEnumerableLike__scanAsync;
