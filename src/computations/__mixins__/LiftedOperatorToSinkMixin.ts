import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_isCompleted,
} from "../__internal__/LiftedSource.js";
import LiftedOperatorToEventListenerMixin, {
  LiftedOperatorToEventListenerLike,
  LiftedOperatorToEventListenerLike_operator,
} from "./LiftedOperatorToEventListenerMixin.js";

export interface LiftedOperatorToSinkLike<T, TDelegate extends SinkLike>
  extends LiftedOperatorToEventListenerLike<T, TDelegate>,
    SinkLike<T> {}

type TReturn<T, TDelegate extends SinkLike> = LiftedOperatorToSinkLike<
  T,
  TDelegate
>;

type TPrototype<T, TDelegate extends SinkLike> = Pick<
  LiftedOperatorToSinkLike<T, TDelegate>,
  typeof SinkLike_complete | typeof SinkLike_isCompleted
>;

const LiftedOperatorToSinkMixin: <T, TDelegate extends SinkLike>() => Mixin2<
  TReturn<T, TDelegate>,
  LiftedOperatorLike<T>,
  TDelegate,
  TPrototype<T, TDelegate>
> = /*@__PURE__*/ (<T, TDelegate extends SinkLike>() => {
  return returns(
    mix(
      include(LiftedOperatorToEventListenerMixin()),
      function LiftedOperatorToSinkMixin(
        this: TPrototype<T, TDelegate>,
        operator: LiftedOperatorLike<T>,
        delegate: TDelegate,
      ): TReturn<T, TDelegate> {
        init(
          LiftedOperatorToEventListenerMixin<T, TDelegate>(),
          this,
          operator,
          delegate,
        );

        return this;
      },
      props(),
      proto<TPrototype<T, TDelegate>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<LiftedOperatorToSinkLike<T, TDelegate>>(this);
          return this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_isCompleted
          ];
        },
        [SinkLike_complete](this: LiftedOperatorToSinkLike<T, TDelegate>) {
          this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_complete
          ]();
        },
      }),
    ),
  );
})();

export default LiftedOperatorToSinkMixin;
