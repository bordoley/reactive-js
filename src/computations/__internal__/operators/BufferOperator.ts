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
import { none } from "../../../functions.js";
import { clampPositiveNonZeroInteger } from "../../../math.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedSinkLike<TSubscription, ReadonlyArray<T>>,
  count?: number,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const BufferOperator_buffer = Symbol("BufferOperator_buffer");
  const BufferOperator_count = Symbol("BufferOperator_count");

  interface TProperties {
    [BufferOperator_buffer]: T[];
    [BufferOperator_count]: number;
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function BufferOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, ReadonlyArray<T>>,
      count?: number,
    ): LiftedSinkLike<TSubscription, T> {
      init(
        DelegatingLiftedSinkMixin<TSubscription, ReadonlyArray<T>>(),
        this,
        delegate,
      );

      this[BufferOperator_count] = clampPositiveNonZeroInteger(
        count ?? MAX_SAFE_INTEGER,
      );
      this[BufferOperator_buffer] = [];

      return this;
    },
    props<TProperties>({
      [BufferOperator_buffer]: none,
      [BufferOperator_count]: MAX_SAFE_INTEGER,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, T, ReadonlyArray<T>>,
        next: T,
      ) {
        const buffer = this[BufferOperator_buffer];
        const count = this[BufferOperator_count];

        buffer[Array_push](next);

        const shouldEmit = buffer[Array_length] === count;

        if (shouldEmit) {
          this[BufferOperator_buffer] = [];
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
        const buffer = this[BufferOperator_buffer];
        this[BufferOperator_buffer] = [];

        if (buffer[Array_length] > 0) {
          delegate[EventListenerLike_notify](buffer);
        }
        delegate[SinkLike_complete]();
      },
    }),
  );
})();
