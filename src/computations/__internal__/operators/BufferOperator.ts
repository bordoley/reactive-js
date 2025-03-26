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
import { DisposableLike } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
  DelegatingLiftedOperatorLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedOperatorLike<TSubscription, ReadonlyArray<T>>,
  count?: number,
) => LiftedOperatorLike<TSubscription, T> = /*@__PURE__*/ (<
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
    include(DelegatingLiftedOperatorMixin<TSubscription, T>()),
    function BufferOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, T>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, ReadonlyArray<T>>,
      count?: number,
    ): LiftedOperatorLike<TSubscription, T> {
      init(
        DelegatingLiftedOperatorMixin<TSubscription, ReadonlyArray<T>>(),
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
      [LiftedOperatorLike_notify](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, T, ReadonlyArray<T>>,
        next: T,
      ) {
        const buffer = this[BufferOperator_buffer];
        const count = this[BufferOperator_count];

        buffer[Array_push](next);

        const shouldEmit = buffer[Array_length] === count;

        if (shouldEmit) {
          this[BufferOperator_buffer] = [];
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](buffer);
        }
      },
      [DelegatingLiftedOperatorLike_onCompleted](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, T, ReadonlyArray<T>>,
      ) {
        const delegate = this[DelegatingLiftedOperatorLike_delegate];
        const buffer = this[BufferOperator_buffer];
        this[BufferOperator_buffer] = [];

        if (buffer[Array_length] > 0) {
          delegate[LiftedOperatorLike_notify](buffer);
        }
        delegate[LiftedOperatorLike_complete]();
      },
    }),
  );
})();
