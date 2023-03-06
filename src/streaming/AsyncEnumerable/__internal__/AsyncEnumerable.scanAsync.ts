import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import {
  Factory,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  AsyncReducer,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ScanAsync,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_scanAsync: ScanAsync<
  AsyncEnumerableLike,
  ObservableLike
>["scanAsync"] = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanAsyncStream_obs = Symbol("ScanAsyncStream_obs");

  type TProperties = {
    readonly [ScanAsyncStream_obs]: MulticastObservableLike<TAcc>;
  };

  const createScanAsyncStream = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), Stream_delegatingMixin()),
      function ScanAsyncStream(
        instance: Pick<
          StreamLike<void, TAcc>,
          | typeof ObservableLike_observe
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: StreamLike<void, T>,
        reducer: AsyncReducer<ObservableLike, T, TAcc>,
        initialValue: Factory<TAcc>,
      ): StreamLike<void, TAcc> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);

        instance[ScanAsyncStream_obs] = pipe(
          delegate,
          Observable_scanAsync(reducer, initialValue),
          Observable_multicast(delegate[DispatcherLike_scheduler]),
        );
        return instance;
      },
      props<TProperties>({
        [ScanAsyncStream_obs]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[ScanAsyncStream_obs][
            MulticastObservableLike_observerCount
          ];
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return this[ScanAsyncStream_obs][MulticastObservableLike_replay];
        },
        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(this[ScanAsyncStream_obs], Observable_observeWith(observer));
        },
      },
    ),
  );

  return (
    reducer: AsyncReducer<ObservableLike, T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
    pipe(
      createScanAsyncStream,
      partial(reducer, initialValue),
      AsyncEnumerable_lift,
    );
})();

export default AsyncEnumerable_scanAsync;
