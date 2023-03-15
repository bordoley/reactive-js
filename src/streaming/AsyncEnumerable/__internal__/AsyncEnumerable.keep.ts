import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Keep } from "../../../containers.js";
import {
  Predicate,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import {
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_keep: Keep<AsyncEnumerableLike>["keep"] = /*@__PURE__*/ (<
  T,
>() => {
  const KeepStream_obs = Symbol("KeepStream_obs");

  type TProperties = {
    readonly [KeepStream_obs]: MulticastObservableLike<T>;
  };

  const createKeepStream = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), Stream_delegatingMixin()),
      function KeepStream(
        instance: Pick<
          StreamLike<void, T>,
          | typeof ObservableLike_observe
          | typeof MulticastObservableLike_observerCount
        > &
          Mutable<TProperties>,
        delegate: StreamLike<void, T>,
        predicate: Predicate<T>,
      ): StreamLike<void, T> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin<void, T>(), instance, delegate);

        instance[KeepStream_obs] = pipe(
          delegate,
          Observable_forEach<ObservableLike, T>(x => {
            if (!predicate(x)) {
              delegate[QueueableLike_push](none);
            }
          }),
          Observable_keep(predicate),
          Observable_multicast(delegate[DispatcherLike_scheduler], {
            maxBufferSize: delegate[QueueableLike_maxBufferSize],
          }),
          Disposable_add(instance),
        );
        return instance;
      },
      props<TProperties>({
        [KeepStream_obs]: none,
      }),
      {
        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[KeepStream_obs][MulticastObservableLike_observerCount];
        },

        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<T>,
        ): void {
          this[KeepStream_obs][ObservableLike_observe](observer);
        },
      },
    ),
  );

  return ((predicate: Predicate<T>) =>
    pipe(
      createKeepStream,
      partial(predicate),
      AsyncEnumerable_lift(true, true),
    )) as Keep<AsyncEnumerableLike>["keep"];
})();

export default AsyncEnumerable_keep;
