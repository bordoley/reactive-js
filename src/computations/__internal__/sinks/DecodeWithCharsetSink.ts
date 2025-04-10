import { Array_length } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Optional, newInstance, none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike>(
  delegate: LiftedSinkLike<TSubscription, string>,
  options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
  }>,
) => LiftedSinkLike<TSubscription, ArrayBuffer> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
>() => {
  const DecodeWithCharsetSink_textDecoder = Symbol(
    "DecodeWithCharsetSink_textDecoder",
  );

  type TProperties = {
    [DecodeWithCharsetSink_textDecoder]: TextDecoder;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin()),
    function DecodeWithCharsetSink(
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
        DelegatingLiftedSinkMixin<TSubscription, ArrayBuffer, string>(),
        this,
        delegate,
      );

      const textDecoder = newInstance(
        TextDecoder,
        options?.charset ?? "utf-8",
        options,
      );
      this[DecodeWithCharsetSink_textDecoder] = textDecoder;

      return this;
    },
    props<TProperties>({
      [DecodeWithCharsetSink_textDecoder]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, ArrayBuffer, string>,
        next: ArrayBuffer,
      ) {
        const data = this[DecodeWithCharsetSink_textDecoder].decode(next, {
          stream: true,
        });

        const shouldEmit = data[Array_length] > 0;

        if (shouldEmit) {
          this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
            data,
          );
        }
      },

      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, ArrayBuffer, string>,
      ) {
        const data = this[DecodeWithCharsetSink_textDecoder].decode(
          newInstance(Uint8Array, []),
          {
            stream: false,
          },
        );

        const delegate = this[DelegatingEventListenerLike_delegate];

        if (data[Array_length] > 0) {
          delegate[EventListenerLike_notify](data);
        }
      },
    }),
  );
})();
