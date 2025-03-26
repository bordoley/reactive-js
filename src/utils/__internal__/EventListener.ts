import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../computations/__internal__/LiftedSource.js";
import { Function1, SideEffect1, none, returns } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
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
  LiftedSinkLike<EventListenerLike<T>, T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LiftedSinkLike_subscription]: EventListenerLike<T>;
  };
  return returns(
    mixInstanceFactory(
      include(DelegatingDisposableMixin),
      function EventListenerToOperator(
        this: Pick<
          LiftedSinkLike<EventListenerLike<T>, T>,
          | typeof SinkLike_isCompleted
          | typeof EventListenerLike_notify
          | typeof SinkLike_complete
        > &
          TProperties,
        listener: EventListenerLike<T>,
      ): LiftedSinkLike<EventListenerLike<T>, T> {
        init(DelegatingDisposableMixin, this, listener);
        this[LiftedSinkLike_subscription] = listener;
        return this;
      },
      props<TProperties>({
        [LiftedSinkLike_subscription]: none,
      }),
      proto({
        get [SinkLike_isCompleted](): boolean {
          unsafeCast<TProperties>(this);
          return this[LiftedSinkLike_subscription][DisposableLike_isDisposed];
        },

        [EventListenerLike_notify](this: TProperties, next: T) {
          this[LiftedSinkLike_subscription][EventListenerLike_notify](next);
        },

        [SinkLike_complete](this: TProperties) {
          this[LiftedSinkLike_subscription][DisposableLike_dispose]();
        },
      }),
    ),
  );
})();
