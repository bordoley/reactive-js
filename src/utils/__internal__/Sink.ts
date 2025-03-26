import {
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_isCompleted,
  LiftedOperatorLike_notify,
  LiftedOperatorLike_subscription,
} from "../../computations/__internal__/LiftedSource.js";
import { Function1, none, returns } from "../../functions.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";

export const toOperator: <T>() => Function1<
  SinkLike<T>,
  LiftedOperatorLike<SinkLike<T>, T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LiftedOperatorLike_subscription]: SinkLike<T>;
  };

  type TPrototype = Pick<
    LiftedOperatorLike<SinkLike<T>, T>,
    | typeof LiftedOperatorLike_isCompleted
    | typeof LiftedOperatorLike_notify
    | typeof LiftedOperatorLike_complete
  >;

  return returns(
    mixInstanceFactory(
      function SinkToOperator(
        this: TPrototype & TProperties,
        listener: SinkLike<T>,
      ): LiftedOperatorLike<SinkLike<T>, T> {
        this[LiftedOperatorLike_subscription] = listener;
        return this;
      },
      props<TProperties>({
        [LiftedOperatorLike_subscription]: none,
      }),
      proto<TPrototype>({
        get [LiftedOperatorLike_isCompleted](): boolean {
          unsafeCast<TProperties>(this);
          return this[LiftedOperatorLike_subscription][SinkLike_isCompleted];
        },

        [LiftedOperatorLike_notify](this: TProperties, next: T) {
          this[LiftedOperatorLike_subscription][EventListenerLike_notify](next);
        },

        [LiftedOperatorLike_complete](this: TProperties) {
          this[LiftedOperatorLike_subscription][SinkLike_complete]();
        },
      }),
    ),
  );
})();
