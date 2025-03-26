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
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";

export const LiftedSinkToEventListenerLike_operator = Symbol(
  "LiftedSinkToEventListenerLike_operator",
);

export interface LiftedSinkToEventListenerLike<
  TSubscription extends EventListenerLike,
  T,
> extends EventListenerLike<T> {
  readonly [LiftedSinkToEventListenerLike_operator]: LiftedSinkLike<
    TSubscription,
    T
  >;
}

type TReturn<
  TSubscription extends EventListenerLike,
  T,
> = LiftedSinkToEventListenerLike<TSubscription, T>;

type TPrototype<TSubscription extends EventListenerLike, T> = Pick<
  LiftedSinkToEventListenerLike<TSubscription, T>,
  typeof EventListenerLike_notify
>;

const LiftedSinkToEventListenerMixin: <
  TSubscription extends EventListenerLike,
  T,
>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends EventListenerLike, T>() => {
  type TProperties = {
    [LiftedSinkToEventListenerLike_operator]: LiftedSinkLike<TSubscription, T>;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function LiftedSinkToEventListenerMixin(
        this: TProperties & TPrototype<TSubscription, T>,
        operator: LiftedSinkLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(DelegatingDisposableMixin, this, operator);
        this[LiftedSinkToEventListenerLike_operator] = operator;

        return this;
      },
      props<TProperties>({
        [LiftedSinkToEventListenerLike_operator]: none,
      }),
      proto<TPrototype<TSubscription, T>>({
        [EventListenerLike_notify](this: TProperties, next: T) {
          this[LiftedSinkToEventListenerLike_operator][
            EventListenerLike_notify
          ](next);
        },
      }),
    ),
  );
})();

export default LiftedSinkToEventListenerMixin;
