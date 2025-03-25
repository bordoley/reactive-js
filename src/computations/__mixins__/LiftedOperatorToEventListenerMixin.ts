import {
  Mixin2,
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
} from "../__internal__/LiftedSource.js";

export const LiftedOperatorToEventListenerLike_operator = Symbol(
  "LiftedOperatorToEventListenerLike_operator",
);

export const LiftedOperatorToEventListenerLike_delegate = Symbol(
  "LiftedOperatorToEventListenerLike_operator",
);

export interface LiftedOperatorToEventListenerLike<
  T,
  TDelegate extends EventListenerLike,
> extends EventListenerLike<T> {
  readonly [LiftedOperatorToEventListenerLike_delegate]: TDelegate;
  readonly [LiftedOperatorToEventListenerLike_operator]: LiftedOperatorLike<T>;
}

type TReturn<
  T,
  TDelegate extends EventListenerLike,
> = LiftedOperatorToEventListenerLike<T, TDelegate>;

type TPrototype<T, TDelegate extends EventListenerLike> = Pick<
  LiftedOperatorToEventListenerLike<T, TDelegate>,
  typeof EventListenerLike_notify
>;

const LiftedOperatorToEventListenerMixin: <
  T,
  TDelegate extends EventListenerLike,
>() => Mixin2<
  TReturn<T, TDelegate>,
  LiftedOperatorLike<T>,
  TDelegate,
  TPrototype<T, TDelegate>
> = /*@__PURE__*/ (<T, TDelegate extends EventListenerLike>() => {
  type TProperties = {
    [LiftedOperatorToEventListenerLike_delegate]: TDelegate;
    [LiftedOperatorToEventListenerLike_operator]: LiftedOperatorLike<T>;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function LiftedOperatorToEventListenerMixin(
        this: TProperties & TPrototype<T, TDelegate>,
        operator: LiftedOperatorLike<T>,
        delegate: TDelegate,
      ): TReturn<T, TDelegate> {
        init(DelegatingDisposableMixin, this, delegate);
        this[LiftedOperatorToEventListenerLike_delegate] = delegate;
        this[LiftedOperatorToEventListenerLike_operator] = operator;

        return this;
      },
      props<TProperties>({
        [LiftedOperatorToEventListenerLike_delegate]: none,
        [LiftedOperatorToEventListenerLike_operator]: none,
      }),
      proto<TPrototype<T, TDelegate>>({
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
