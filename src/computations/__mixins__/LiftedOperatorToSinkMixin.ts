import {
  Mixin1,
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

export interface LiftedOperatorToSinkLike<TSubscription extends SinkLike, T>
  extends LiftedOperatorToEventListenerLike<TSubscription, T>,
    SinkLike<T> {}

type TReturn<TSubscription extends SinkLike, T> = LiftedOperatorToSinkLike<
  TSubscription,
  T
>;

type TPrototype<TSubscription extends SinkLike, T> = Pick<
  LiftedOperatorToSinkLike<TSubscription, T>,
  typeof SinkLike_complete | typeof SinkLike_isCompleted
>;

const LiftedOperatorToSinkMixin: <
  TSubscription extends SinkLike,
  T,
>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedOperatorLike<TSubscription, T>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends SinkLike, T>() => {
  return returns(
    mix(
      include(LiftedOperatorToEventListenerMixin()),
      function LiftedOperatorToSinkMixin(
        this: TPrototype<TSubscription, T>,
        operator: LiftedOperatorLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(
          LiftedOperatorToEventListenerMixin<TSubscription, T>(),
          this,
          operator,
        );

        return this;
      },
      props(),
      proto<TPrototype<TSubscription, T>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<LiftedOperatorToSinkLike<TSubscription, T>>(this);
          return this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_isCompleted
          ];
        },
        [SinkLike_complete](this: LiftedOperatorToSinkLike<TSubscription, T>) {
          this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_complete
          ]();
        },
      }),
    ),
  );
})();

export default LiftedOperatorToSinkMixin;
