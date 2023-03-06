import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { TakeWhile } from "../../../containers.js";
import {
  Predicate,
  none,
  partial,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { AsyncEnumerableLike, StreamLike } from "../../../streaming.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";

const AsyncEnumerable_takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const TakeWhileStream_obs = Symbol("TakeWhileStream_obs");

    type TProperties = {
      readonly [TakeWhileStream_obs]: MulticastObservableLike<T>;
    };

    const createTakeWhileStream = createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), Stream_delegatingMixin()),
        function TakeWhileStream(
          instance: Pick<
            StreamLike<void, T>,
            | typeof ObservableLike_observe
            | typeof MulticastObservableLike_observerCount
            | typeof MulticastObservableLike_replay
          > &
            Mutable<TProperties>,
          delegate: StreamLike<void, T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): StreamLike<void, T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(Stream_delegatingMixin(), instance, delegate);

          instance[TakeWhileStream_obs] = pipe(
            delegate,
            Observable_takeWhile(predicate, { inclusive }),
            Observable_multicast(delegate[DispatcherLike_scheduler]),
            Disposable_add(instance),
          );
          return instance;
        },
        props<TProperties>({
          [TakeWhileStream_obs]: none,
        }),
        {
          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return this[TakeWhileStream_obs][
              MulticastObservableLike_observerCount
            ];
          },
          get [MulticastObservableLike_replay]() {
            unsafeCast<TProperties>(this);
            return this[TakeWhileStream_obs][MulticastObservableLike_replay];
          },
          [ObservableLike_observe](
            this: TProperties,
            observer: ObserverLike<T>,
          ): void {
            pipe(this[TakeWhileStream_obs], Observable_observeWith(observer));
          },
        },
      ),
    );

    return (
      predicate: Predicate<T>,
      options: { readonly inclusive?: boolean } = {},
    ) => {
      const { inclusive = false } = options;
      return pipe(
        createTakeWhileStream,
        partial(predicate, inclusive),
        AsyncEnumerable_lift,
      );
    };
  })();

export default AsyncEnumerable_takeWhile;
