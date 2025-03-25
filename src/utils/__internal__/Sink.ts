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
  LiftedOperatorLike<T>
> = /*@__PURE__*/ (<T>() => {
  const SinkToOperator_sink = Symbol("SinkToOperator_sink");

  type TProperties = {
    [SinkToOperator_sink]: SinkLike<T>;
  };

  type TPrototype = Pick<
    LiftedOperatorLike<T>,
    | typeof LiftedOperatorLike_isCompleted
    | typeof LiftedOperatorLike_notify
    | typeof LiftedOperatorLike_complete
  >;

  return returns(
    mixInstanceFactory(
      function SinkToOperator(
        this: TPrototype & TProperties,
        listener: SinkLike<T>,
      ): LiftedOperatorLike<T> {
        this[SinkToOperator_sink] = listener;
        return this;
      },
      props<TProperties>({
        [SinkToOperator_sink]: none,
      }),
      proto<TPrototype>({
        get [LiftedOperatorLike_isCompleted](): boolean {
          unsafeCast<TProperties>(this);
          return this[SinkToOperator_sink][SinkLike_isCompleted];
        },

        [LiftedOperatorLike_notify](this: TProperties, next: T) {
          this[SinkToOperator_sink][EventListenerLike_notify](next);
        },

        [LiftedOperatorLike_complete](this: TProperties) {
          this[SinkToOperator_sink][SinkLike_complete]();
        },
      }),
    ),
  );
})();
