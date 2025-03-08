import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../computations.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";

import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_keep: EventSource.Signature["keep"] = /*@__PURE__*/ (() => {
  const KeepEventListener_predicate = Symbol("KeepEventListener_predicate");
  const KeepEventListener_delegate = Symbol("KeepEventListener_delegate");

  interface TProperties<T> {
    [KeepEventListener_predicate]: Predicate<T>;
    [KeepEventListener_delegate]: EventListenerLike<T>;
  }

  const createKeepEventListener: <T>(
    delegate: EventListenerLike<T>,
    predicate: Predicate<T>,
  ) => EventListenerLike<T> = (<T>() =>
    mixInstanceFactory(
      include(DelegatingDisposableMixin),
      function KeepEventListener(
        instance: Pick<EventListenerLike<T>, typeof EventListenerLike_notify> &
          TProperties<T>,
        delegate: EventListenerLike<T>,
        predicate: Predicate<T>,
      ): EventListenerLike<T> {
        init(DelegatingDisposableMixin, instance, delegate);
        instance[KeepEventListener_predicate] = predicate;
        instance[KeepEventListener_delegate] = delegate;

        return instance;
      },
      props<TProperties<T>>({
        [KeepEventListener_predicate]: none,
        [KeepEventListener_delegate]: none,
      }),
      {
        [EventListenerLike_notify](
          this: TProperties<T> & EventListenerLike<T>,
          next: T,
        ) {
          if (this[KeepEventListener_predicate](next)) {
            this[KeepEventListener_delegate][EventListenerLike_notify](next);
          }
        },
      },
    ))();

  return <T>(predicate: Predicate<T>) =>
    pipe(createKeepEventListener<T>, partial(predicate), EventSource_lift);
})();

export default EventSource_keep;
