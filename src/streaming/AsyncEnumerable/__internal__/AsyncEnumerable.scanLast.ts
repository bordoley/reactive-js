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
  Function2,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ScanLast,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_scanLast: ScanLast<
  AsyncEnumerableLike,
  ObservableLike
>["scanLast"] = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanLastStream_obs = Symbol("ScanLastStream_obs");

  type TProperties = {
    readonly [ScanLastStream_obs]: MulticastObservableLike<TAcc>;
  };

  const createScanLastStream = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), Stream_delegatingMixin()),
      function ScanLastStream(
        instance: Pick<
          StreamLike<void, TAcc>,
          | typeof ObservableLike_observe
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
        > &
          Mutable<TProperties>,
        delegate: StreamLike<void, T>,
        reducer: Function2<TAcc, T, ObservableLike<TAcc>>,
        initialValue: Factory<TAcc>,
      ): StreamLike<void, TAcc> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);

        instance[ScanLastStream_obs] = pipe(
          delegate,
          Observable_scanLast(reducer, initialValue),
          Observable_multicast(delegate[DispatcherLike_scheduler]),
        );
        return instance;
      },
      props<TProperties>({
        [ScanLastStream_obs]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[ScanLastStream_obs][
            MulticastObservableLike_observerCount
          ];
        },
        get [MulticastObservableLike_replay]() {
          unsafeCast<TProperties>(this);
          return this[ScanLastStream_obs][MulticastObservableLike_replay];
        },
        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<TAcc>,
        ): void {
          this[ScanLastStream_obs][ObservableLike_observe](observer);
        },
      },
    ),
  );

  return (
    reducer: Function2<TAcc, T, ObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<AsyncEnumerableLike, T, TAcc> =>
    pipe(
      createScanLastStream,
      partial(reducer, initialValue),
      AsyncEnumerable_lift(false, false),
    );
})();

export default AsyncEnumerable_scanLast;
