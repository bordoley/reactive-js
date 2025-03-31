import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Function1, SideEffect1, none, returns } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
  SinkLike,
} from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";

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

export const toSink: <T>() => Function1<EventListenerLike<T>, SinkLike<T>> =
  /*@__PURE__*/ (<T>() => {
    const EventListenerToSink_eventListener = Symbol(
      "EventListenerToSink_eventListener",
    );

    type TProperties = {
      [EventListenerToSink_eventListener]: EventListenerLike<T>;
    };

    return returns(
      mixInstanceFactory(
        include(DelegatingDisposableMixin, DisposeOnCompleteSinkMixin()),
        function EventListenerToSink(
          this: Pick<SinkLike<T>, typeof EventListenerLike_notify> &
            TProperties,
          listener: EventListenerLike<T>,
        ): SinkLike<T> {
          init(DelegatingDisposableMixin, this, listener);
          init(DisposeOnCompleteSinkMixin(), this);

          this[EventListenerToSink_eventListener] = listener;
          return this;
        },
        props<TProperties>({
          [EventListenerToSink_eventListener]: none,
        }),
        proto({
          [EventListenerLike_notify](this: TProperties, next: T) {
            this[EventListenerToSink_eventListener][EventListenerLike_notify](
              next,
            );
          },
        }),
      ),
    );
  })();
