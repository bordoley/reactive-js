import {
  Array_length,
  Array_push,
  MAX_SAFE_INTEGER,
} from "../../../__internal__/constants.js";
import {
  Mixin,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { ConsumerLike, ObserverLike, SinkLike } from "../../../utils.js";

const BufferMixin: <T>() => Mixin<
  Pick<LiftedSinkLike<T, ReadonlyArray<T>>, typeof LiftedListenerLike_notify>
> = /*@__PURE__*/ (<T>() => {
  const BufferMixin_buffer = Symbol("BufferMixin_buffer");
  const Buffer_count = Symbol("BufferingLike_count");

  interface TProperties {
    [BufferMixin_buffer]: T[];
    [Buffer_count]: number;
  }

  return returns(
    mix(
      function BufferMixin(
        this: Pick<
          LiftedSinkLike<T, ReadonlyArray<T>>,
          typeof LiftedListenerLike_notify
        > &
          TProperties,
        count?: number,
      ): Pick<
        LiftedSinkLike<T, ReadonlyArray<T>>,
        typeof LiftedListenerLike_notify
      > {
        this[Buffer_count] = clampPositiveNonZeroInteger(
          count ?? MAX_SAFE_INTEGER,
        );
        this[BufferMixin_buffer] = [];

        return this;
      },
      props<TProperties>({
        [BufferMixin_buffer]: none,
        [Buffer_count]: 0,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedSinkLike<T, readonly T[]>,
          next: T,
        ) {
          const buffer = this[BufferMixin_buffer];
          const count = this[Buffer_count];

          buffer[Array_push](next);

          const shouldEmit = buffer[Array_length] === count;

          if (shouldEmit) {
            this[BufferMixin_buffer] = [];
            this[LiftedListenerLike_notifyDelegate](buffer);
          }
        },
        [LiftedSinkLike_complete](
          this: TProperties & LiftedSinkLike<T, readonly T[]>,
        ) {
          const buffer = this[BufferMixin_buffer];
          this[BufferMixin_buffer] = [];

          if (buffer[Array_length] > 0) {
            this[LiftedListenerLike_notifyDelegate](buffer);
          }
          this[LiftedSinkLike_completeDelegate]();
        },
      },
    ),
  );
})();

export const createSink: <T>(
  delegate: SinkLike<ReadonlyArray<T>>,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), BufferMixin()),
    function BufferSink(
      this: unknown,
      delegate: SinkLike<ReadonlyArray<T>>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T, ReadonlyArray<T>>(), this, delegate);
      init(BufferMixin(), this);

      return this;
    },
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<ReadonlyArray<T>>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), BufferMixin()),
    function BufferConsumer(
      this: unknown,
      delegate: ConsumerLike<ReadonlyArray<T>>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T, ReadonlyArray<T>>(), this, delegate);
      init(BufferMixin(), this);

      return this;
    },
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<ReadonlyArray<T>>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), BufferMixin()),
    function BufferObserver(
      this: unknown,
      delegate: ObserverLike<ReadonlyArray<T>>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T, ReadonlyArray<T>>(), this, delegate, none);
      init(BufferMixin(), this);

      return this;
    },
  ))();
