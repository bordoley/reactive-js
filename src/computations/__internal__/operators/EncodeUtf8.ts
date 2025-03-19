import {
  Mixin,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { newInstance, none, returns } from "../../../functions.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { ConsumerLike, ObserverLike, SinkLike } from "../../../utils.js";

const EncodeUtf8Mixin: () => Mixin<
  Pick<LiftedListenerLike<string, Uint8Array>, typeof LiftedListenerLike_notify>
> = /*@__PURE__*/ (() => {
  const EncodeUtf8Mixin_encoder = Symbol("EncodeUtf8Mixin_encoder");

  interface TProperties {
    [EncodeUtf8Mixin_encoder]: TextEncoder;
  }

  return returns(
    mix(
      function EncodeUtf8Mixin(
        this: Pick<
          LiftedListenerLike<string, Uint8Array>,
          typeof LiftedListenerLike_notify
        > &
          TProperties,
      ): Pick<
        LiftedListenerLike<string, Uint8Array>,
        typeof LiftedListenerLike_notify
      > {
        this[EncodeUtf8Mixin_encoder] = newInstance(TextEncoder);

        return this;
      },
      props<TProperties>({
        [EncodeUtf8Mixin_encoder]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<string, Uint8Array>,
          next: string,
        ) {
          const mapped = this[EncodeUtf8Mixin_encoder].encode(next);
          this[LiftedListenerLike_notifyDelegate](mapped);
        },
      },
    ),
  );
})();

export const createSink: (delegate: SinkLike<Uint8Array>) => SinkLike<string> =
  /*@__PURE__*/ (() =>
    mixInstanceFactory(
      include(LiftedSinkMixin(), EncodeUtf8Mixin()),
      function EncodeUtf8Sink(
        this: unknown,
        delegate: SinkLike<Uint8Array>,
      ): SinkLike<string> {
        init(LiftedSinkMixin<string, Uint8Array>(), this, delegate);
        init(EncodeUtf8Mixin(), this);

        return this;
      },
    ))();

export const createConsumer: (
  delegate: ConsumerLike<Uint8Array>,
) => ConsumerLike<string> = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), EncodeUtf8Mixin()),
    function EncodeUtf8Consumer(
      this: unknown,
      delegate: ConsumerLike<Uint8Array>,
    ): ConsumerLike<string> {
      init(LiftedConsumerMixin<string, Uint8Array>(), this, delegate);
      init(EncodeUtf8Mixin(), this);

      return this;
    },
  ))();

export const createObserver: (
  delegate: ObserverLike<Uint8Array>,
) => ObserverLike<string> = /*@__PURE__*/ (() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), EncodeUtf8Mixin()),
    function EncodeUtf8Observer(
      this: unknown,
      delegate: ObserverLike<Uint8Array>,
    ): ObserverLike<string> {
      init(LiftedObserverMixin<string, Uint8Array>(), this, delegate, none);
      init(EncodeUtf8Mixin(), this);

      return this;
    },
  ))();
