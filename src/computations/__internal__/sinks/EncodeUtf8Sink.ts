import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike>(
  delegate: LiftedSinkLike<TSubscription, ArrayBuffer>,
) => LiftedSinkLike<TSubscription, string> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
>() => {
  const EncodeUtf8Sink_textEncoder = Symbol("EncodeUtf8Sink_textEncoder");

  type TProperties = {
    [EncodeUtf8Sink_textEncoder]: TextEncoder;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin()),
    function EncodeUtf8Sink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, string, ArrayBuffer>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, ArrayBuffer>,
    ): LiftedSinkLike<TSubscription, string> {
      init(
        DelegatingLiftedSinkMixin<TSubscription, string, ArrayBuffer>(),
        this,
        delegate,
      );

      this[EncodeUtf8Sink_textEncoder] = newInstance(TextEncoder);

      return this;
    },
    props<TProperties>({
      [EncodeUtf8Sink_textEncoder]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, string, ArrayBuffer>,
        next: string,
      ) {
        const mapped = this[EncodeUtf8Sink_textEncoder].encode(next);
        this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
          mapped,
        );
      },
    }),
  );
})();
