import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike>(
  delegate: LiftedOperatorLike<TSubscription, ArrayBuffer>,
) => LiftedOperatorLike<TSubscription, string> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
>() => {
  const EncodeUtf8Operator_textEncoder = Symbol(
    "EncodeUtf8Operator_textEncoder",
  );

  type TProperties = {
    [EncodeUtf8Operator_textEncoder]: TextEncoder;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin()),
    function EncodeUtf8Operator(
      this: Pick<
        DelegatingLiftedOperatorLike<TSubscription, string, ArrayBuffer>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<TSubscription, ArrayBuffer>,
    ): LiftedOperatorLike<TSubscription, string> {
      init(
        DelegatingLiftedOperatorMixin<TSubscription, string, ArrayBuffer>(),
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
      [LiftedOperatorLike_notify](
        this: TProperties &
          DelegatingLiftedOperatorLike<TSubscription, string, ArrayBuffer>,
        next: string,
      ) {
        const mapped = this[EncodeUtf8Operator_textEncoder].encode(next);
        this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](
          mapped,
        );
      },
    }),
  );
})();
