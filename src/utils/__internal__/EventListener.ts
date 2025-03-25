import {
  include,
  init,
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
import { Function1, SideEffect1, none, returns } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

export const create: <T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EventListenerLike_notify]: SideEffect1<T>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function EventListener(
      this: TProperties & Omit<EventListenerLike<T>, keyof DisposableLike>,
      notify: (this: EventListenerLike<T>, a: T) => void,
    ): EventListenerLike<T> {
      init(DisposableMixin, this);

      this[EventListenerLike_notify] = notify;

      return this;
    },
    props<TProperties>({
      [EventListenerLike_notify]: none,
    }),
  );
})();

export const toOperator: <T>() => Function1<
  EventListenerLike<T>,
  LiftedOperatorLike<T>
> = /*@__PURE__*/ (<T>() => {
  const EventListenerToOperator_listener = Symbol(
    "EventListenerToOperator_listener",
  );

  type TProperties = {
    [EventListenerToOperator_listener]: EventListenerLike<T>;
  };
  return returns(
    mixInstanceFactory(
      function EventListenerToOperator(
        this: LiftedOperatorLike<T> & TProperties,
        listener: EventListenerLike<T>,
      ): LiftedOperatorLike<T> {
        this[EventListenerToOperator_listener] = listener;
        return this;
      },
      props<TProperties>({
        [EventListenerToOperator_listener]: none,
      }),
      proto({
        get [LiftedOperatorLike_isCompleted](): boolean {
          unsafeCast<TProperties>(this);
          return this[EventListenerToOperator_listener][
            DisposableLike_isDisposed
          ];
        },

        [LiftedOperatorLike_notify](this: TProperties, next: T) {
          this[EventListenerToOperator_listener][EventListenerLike_notify](
            next,
          );
        },

        [LiftedOperatorLike_complete](this: TProperties) {
          this[EventListenerToOperator_listener][DisposableLike_dispose]();
        },
      }),
    ),
  );
})();
