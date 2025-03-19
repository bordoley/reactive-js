import { Array_length } from "../../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Optional, newInstance, none, returns } from "../../../functions.js";
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

const DecodeWithCharsetMixin: () => Mixin1<
  Pick<LiftedSinkLike<ArrayBuffer, string>, typeof LiftedListenerLike_notify>,
  Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
  }>
> = /*@__PURE__*/ (() => {
  const DecodeWithCharsetMixin_textDecoder = Symbol(
    "DecodeWithCharsetMixin_textDecoder",
  );

  type TProperties = {
    [DecodeWithCharsetMixin_textDecoder]: TextDecoder;
  };

  return returns(
    mix(
      function DecodeWithCharsetMixin(
        this: Pick<
          LiftedSinkLike<ArrayBuffer, string>,
          typeof LiftedListenerLike_notify
        > &
          TProperties,
        options: Optional<{
          charset?: string;
          fatal?: boolean;
          ignoreBOM?: boolean;
        }>,
      ): Pick<
        LiftedSinkLike<ArrayBuffer, string>,
        typeof LiftedListenerLike_notify
      > {
        const textDecoder = newInstance(
          TextDecoder,
          options?.charset ?? "utf-8",
          options,
        );
        this[DecodeWithCharsetMixin_textDecoder] = textDecoder;

        return this;
      },
      props<TProperties>({
        [DecodeWithCharsetMixin_textDecoder]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedSinkLike<ArrayBuffer, string>,
          next: ArrayBuffer,
        ) {
          const data = this[DecodeWithCharsetMixin_textDecoder].decode(next, {
            stream: true,
          });

          const shouldEmit = data[Array_length] > 0;

          if (shouldEmit) {
            this[LiftedListenerLike_notifyDelegate](data);
          }
        },

        [LiftedSinkLike_complete](
          this: TProperties & LiftedSinkLike<ArrayBuffer, string>,
        ) {
          const data = this[DecodeWithCharsetMixin_textDecoder].decode(
            newInstance(Uint8Array, []),
            {
              stream: false,
            },
          );

          if (data[Array_length] > 0) {
            this[LiftedListenerLike_notifyDelegate](data);
          }

          this[LiftedSinkLike_completeDelegate]();
        },
      },
    ),
  );
})();

export const createSink: (
  delegate: SinkLike<string>,
  options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
  }>,
) => SinkLike<ArrayBuffer> = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), DecodeWithCharsetMixin()),
    function DecodeWithCharsetSink(
      this: unknown,
      delegate: SinkLike<string>,
      options: Optional<{
        charset?: string;
        fatal?: boolean;
        ignoreBOM?: boolean;
      }>,
    ): SinkLike<ArrayBuffer> {
      init(LiftedSinkMixin<ArrayBuffer, string>(), this, delegate);
      init(DecodeWithCharsetMixin(), this, options);

      return this;
    },
  ))();

export const createConsumer: (
  delegate: ConsumerLike<string>,
  options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
  }>,
) => ConsumerLike<ArrayBuffer> = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), DecodeWithCharsetMixin()),
    function DecodeWithCharsetConsumer(
      this: unknown,
      delegate: ConsumerLike<string>,
      options: Optional<{
        charse?: string;
        fatal?: boolean;
        ignoreBOM?: boolean;
      }>,
    ): ConsumerLike<ArrayBuffer> {
      init(LiftedConsumerMixin<ArrayBuffer, string>(), this, delegate);
      init(DecodeWithCharsetMixin(), this, options);

      return this;
    },
  ))();

export const createObserver: (
  delegate: ObserverLike<string>,
  options: Optional<{
    charset?: string;
    fatal?: boolean;
    ignoreBOM?: boolean;
  }>,
) => ObserverLike<ArrayBuffer> = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), DecodeWithCharsetMixin()),
    function DecodeWithCharsetObserver(
      this: unknown,
      delegate: ObserverLike<string>,
      options: Optional<{
        charset?: string;
        fatal?: boolean;
        ignoreBOM?: boolean;
      }>,
    ): ObserverLike<ArrayBuffer> {
      init(LiftedObserverMixin<ArrayBuffer, string>(), this, delegate, none);
      init(DecodeWithCharsetMixin(), this, options);

      return this;
    },
  ))();
