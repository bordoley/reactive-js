import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import { DisposableLike, EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike>(
  delegate: LiftedSinkLike<TSubscription, ArrayBuffer>,
) => LiftedSinkLike<TSubscription, string> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
>() => {
  const EncodeUtf8Operator_textEncoder = Symbol(
    "EncodeUtf8Operator_textEncoder",
  );

  type TProperties = {
    [EncodeUtf8Operator_textEncoder]: TextEncoder;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin()),
    function EncodeUtf8Operator(
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

      this[EncodeUtf8Operator_textEncoder] = newInstance(TextEncoder);

      return this;
    },
    props<TProperties>({
      [EncodeUtf8Operator_textEncoder]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, string, ArrayBuffer>,
        next: string,
      ) {
        const mapped = this[EncodeUtf8Operator_textEncoder].encode(next);
        this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
          mapped,
        );
      },
    }),
  );
})();
