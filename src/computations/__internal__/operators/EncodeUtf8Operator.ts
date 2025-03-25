import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_delegate,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
} from "../LiftedSource.js";

export const create: (
  delegate: LiftedOperatorLike<ArrayBuffer>,
) => LiftedOperatorLike<string> = /*@__PURE__*/ (() => {
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
        DelegatingLiftedOperatorLike<string, ArrayBuffer>,
        typeof LiftedOperatorLike_notify
      > &
        TProperties,
      delegate: LiftedOperatorLike<ArrayBuffer>,
    ): LiftedOperatorLike<string> {
      init(
        DelegatingLiftedOperatorMixin<string, ArrayBuffer>(),
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
        this: TProperties & DelegatingLiftedOperatorLike<string, ArrayBuffer>,
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
