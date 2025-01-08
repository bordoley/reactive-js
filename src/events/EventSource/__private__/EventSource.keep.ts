import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../events.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_keep: EventSource.Signature["keep"] = /*@__PURE__*/ (() => {
  const KeepEventListener_predicate = Symbol("KeepEventListener_predicate");

  interface TProperties<T> {
    [KeepEventListener_predicate]: Predicate<T>;
  }

  const createKeepEventListener: <T>(
    delegate: EventListenerLike<T>,
    predicate: Predicate<T>,
  ) => EventListenerLike<T> = (<T>() =>
    mixInstanceFactory(
      include(DelegatingDisposableMixin<EventListenerLike<T>>()),
      function KeepEventListener(
        instance: Pick<EventListenerLike<T>, typeof EventListenerLike_notify> &
          TProperties<T>,
        delegate: EventListenerLike<T>,
        predicate: Predicate<T>,
      ): EventListenerLike<T> {
        init(
          DelegatingDisposableMixin<EventListenerLike<T>>(),
          instance,
          delegate,
        );
        instance[KeepEventListener_predicate] = predicate;

        return instance;
      },
      props<TProperties<T>>({
        [KeepEventListener_predicate]: none,
      }),
      {
        [EventListenerLike_notify](
          this: TProperties<T> &
            DelegatingDisposableLike<EventListenerLike<T>> &
            EventListenerLike<T>,
          next: T,
        ) {
          if (this[KeepEventListener_predicate](next)) {
            this[DelegatingDisposableLike_delegate][EventListenerLike_notify](
              next,
            );
          }
        },
      },
    ))();

  return <T>(predicate: Predicate<T>) =>
    pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();

export default EventSource_keep;
