import {
  Array_length,
  Array_push,
  MAX_SAFE_INTEGER,
} from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, none } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T>(
  delegate: LiftedSinkLike<TSubscription, ReadonlyArray<T>>,
  options: Optional<{
    count?: number;
  }>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
>() => {
  const BufferSink_buffer = Symbol("BufferSink_buffer");
  const BufferSink_count = Symbol("BufferSink_count");

  type TProperties = {
    [BufferSink_buffer]: T[];
    [BufferSink_count]: number;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function BufferSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, ReadonlyArray<T>>,
      options: Optional<{
        count?: number;
      }>,
    ): LiftedSinkLike<TSubscription, T> {
      init(
        DelegatingLiftedSinkMixin<TSubscription, ReadonlyArray<T>>(),
        this,
        delegate,
      );

      this[BufferSink_count] = clampPositiveNonZeroInteger(
        options?.count ?? MAX_SAFE_INTEGER,
      );
      this[BufferSink_buffer] = [];

      return this;
    },
    props<TProperties>({
      [BufferSink_buffer]: none,
      [BufferSink_count]: MAX_SAFE_INTEGER,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, T, ReadonlyArray<T>>,
        next: T,
      ) {
        const buffer = this[BufferSink_buffer];
        const count = this[BufferSink_count];

        buffer[Array_push](next);

        const shouldEmit = buffer[Array_length] === count;

        if (shouldEmit) {
          this[BufferSink_buffer] = [];
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
            buffer,
          );
        }
      },
      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, T, ReadonlyArray<T>>,
      ) {
        const delegate = this[DelegatingLiftedSinkLike_delegate];
        const buffer = this[BufferSink_buffer];
        this[BufferSink_buffer] = [];

        if (buffer[Array_length] > 0) {
          delegate[EventListenerLike_notify](buffer);
        }
        delegate[SinkLike_complete]();
      },
    }),
  );
})();
