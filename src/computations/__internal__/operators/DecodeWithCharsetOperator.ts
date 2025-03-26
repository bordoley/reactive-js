import { Array_length } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, newInstance, none } from "../../../functions.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike>(
  delegate: LiftedSinkLike<TSubscription, string>,
  options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
  }>,
) => LiftedSinkLike<TSubscription, ArrayBuffer> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
>() => {
  const DecodeWithCharsetOperator_textDecoder = Symbol(
    "DecodeWithCharsetOperator_textDecoder",
  );

  type TProperties = {
    [DecodeWithCharsetOperator_textDecoder]: TextDecoder;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin()),
    function DecodeWithCharsetOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, ArrayBuffer>,
        | typeof EventListenerLike_notify
        | typeof DelegatingLiftedSinkLike_onCompleted
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, string>,
      options: Optional<{
        charset?: string;
        fatal?: boolean;
        ignoreBOM?: boolean;
      }>,
    ): LiftedSinkLike<TSubscription, ArrayBuffer> {
      init(
        DelegatingLiftedOperatorMixin<TSubscription, ArrayBuffer, string>(),
        this,
        delegate,
      );

      const textDecoder = newInstance(
        TextDecoder,
        options?.charset ?? "utf-8",
        options,
      );
      this[DecodeWithCharsetOperator_textDecoder] = textDecoder;

      return this;
    },
    props<TProperties>({
      [DecodeWithCharsetOperator_textDecoder]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, ArrayBuffer, string>,
        next: ArrayBuffer,
      ) {
        const data = this[DecodeWithCharsetOperator_textDecoder].decode(next, {
          stream: true,
        });

        const shouldEmit = data[Array_length] > 0;

        if (shouldEmit) {
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
            data,
          );
        }
      },

      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, ArrayBuffer, string>,
      ) {
        const data = this[DecodeWithCharsetOperator_textDecoder].decode(
          newInstance(Uint8Array, []),
          {
            stream: false,
          },
        );

        const delegate = this[DelegatingLiftedSinkLike_delegate];

        if (data[Array_length] > 0) {
          delegate[EventListenerLike_notify](data);
        }

        delegate[SinkLike_complete]();
      },
    }),
  );
})();
