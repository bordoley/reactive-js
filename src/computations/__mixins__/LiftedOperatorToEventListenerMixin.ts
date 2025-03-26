import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike, EventListenerLike_notify } from "../../utils.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_notify,
  LiftedOperatorLike_subscription,
} from "../__internal__/LiftedSource.js";

export const LiftedOperatorToEventListenerLike_operator = Symbol(
  "LiftedOperatorToEventListenerLike_operator",
);

export interface LiftedOperatorToEventListenerLike<
  TSubscription extends EventListenerLike,
  T,
> extends EventListenerLike<T> {
  readonly [LiftedOperatorToEventListenerLike_operator]: LiftedOperatorLike<
    TSubscription,
    T
  >;
}

type TReturn<
  TSubscription extends EventListenerLike,
  T,
> = LiftedOperatorToEventListenerLike<TSubscription, T>;

type TPrototype<TSubscription extends EventListenerLike, T> = Pick<
  LiftedOperatorToEventListenerLike<TSubscription, T>,
  typeof EventListenerLike_notify
>;

const LiftedOperatorToEventListenerMixin: <
  TSubscription extends EventListenerLike,
  T,
>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedOperatorLike<TSubscription, T>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends EventListenerLike, T>() => {
  type TProperties = {
    [LiftedOperatorToEventListenerLike_operator]: LiftedOperatorLike<
      TSubscription,
      T
    >;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function LiftedOperatorToEventListenerMixin(
        this: TProperties & TPrototype<TSubscription, T>,
        operator: LiftedOperatorLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        const delegate = operator[LiftedOperatorLike_subscription];

        init(DelegatingDisposableMixin, this, delegate);
        this[LiftedOperatorToEventListenerLike_operator] = operator;

        return this;
      },
      props<TProperties>({
        [LiftedOperatorToEventListenerLike_operator]: none,
      }),
      proto<TPrototype<TSubscription, T>>({
        [EventListenerLike_notify](this: TProperties, next: T) {
          this[LiftedOperatorToEventListenerLike_operator][
            LiftedOperatorLike_notify
          ](next);
        },
      }),
    ),
  );
})();

export default LiftedOperatorToEventListenerMixin;
