import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator, Scan } from "../../../containers.js";
import { Factory, Reducer, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_scan: Scan<AsyncEnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const ScanLastEnumerator_op = Symbol("ScanLastEnumerator_op");

  type TProperties = {
    readonly [ScanLastEnumerator_op]: ContainerOperator<
      ObservableLike,
      T,
      TAcc
    >;
  };

  const createScanStream = createInstanceFactory(
    mix(
      include(Stream_delegatingMixin()),
      function KeepStream(
        instance: Pick<StreamLike<void, TAcc>, typeof ObservableLike_observe> &
          Mutable<TProperties>,
        delegate: StreamLike<void, T>,
        reducer: Reducer<T, TAcc>,
        acc: Factory<TAcc>,
      ): StreamLike<void, TAcc> {
        init(Stream_delegatingMixin(), instance, delegate);

        instance[ScanLastEnumerator_op] = Observable_scan(reducer, acc);
        return instance;
      },
      props<TProperties>({
        [ScanLastEnumerator_op]: none,
      }),
      {
        [ObservableLike_observe](
          this: TProperties & DelegatingLike<StreamLike<void, T>>,
          observer: ObserverLike<TAcc>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
            this[ScanLastEnumerator_op],
            Observable_observeWith(observer),
          );
        },
      },
    ),
  );

  return ((reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(
      createScanStream,
      partial(reducer, initialValue),
      AsyncEnumerable_lift(true, true),
    )) as Scan<AsyncEnumerableLike>["scan"];
})();

export default AsyncEnumerable_scan;
