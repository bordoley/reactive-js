import { Array_length } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, newInstance, none } from "../../../functions.js";
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

export const create: <TSubscription extends DisposableLike>(
  delegate: LiftedOperatorLike<TSubscription, string>,
  options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
  }>,
) => LiftedOperatorLike<TSubscription, ArrayBuffer> = /*@__PURE__*/ (<
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
        DelegatingLiftedOperatorLike<TSubscription, ArrayBuffer>,
        | typeof LiftedOperatorLike_notify
        | typeof DelegatingLiftedOperatorLike_onCompleted
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, string>,
      options: Optional<{
        charset?: string;
        fatal?: boolean;
        ignoreBOM?: boolean;
      }>,
    ): LiftedOperatorLike<TSubscription, ArrayBuffer> {
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
      [LiftedOperatorLike_notify](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, ArrayBuffer, string>,
        next: ArrayBuffer,
      ) {
        const data = this[DecodeWithCharsetOperator_textDecoder].decode(next, {
          stream: true,
        });

        const shouldEmit = data[Array_length] > 0;

        if (shouldEmit) {
          this[DelegatingLiftedOperatorLike_delegate][
            LiftedOperatorLike_notify
          ](data);
        }
      },

      [DelegatingLiftedOperatorLike_onCompleted](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, ArrayBuffer, string>,
      ) {
        const data = this[DecodeWithCharsetOperator_textDecoder].decode(
          newInstance(Uint8Array, []),
          {
            stream: false,
          },
        );

        const delegate = this[DelegatingLiftedOperatorLike_delegate];

        if (data[Array_length] > 0) {
          delegate[LiftedOperatorLike_notify](data);
        }

        delegate[LiftedOperatorLike_complete]();
      },
    }),
  );
})();
