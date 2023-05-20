import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Function1, pipe, returns } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventSourceLike,
  SinkLike_notify,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_flattenIterable: <T>() => Function1<
  EventSourceLike<Iterable<T>>,
  EventSourceLike<T>
> = /*@__PURE__*/ (() => {
  const createFlattenIterableEventListener: <T>(
    delegate: EventListenerLike<T>,
  ) => EventListenerLike<Iterable<T>> = (<T>() =>
    createInstanceFactory(
      mix(
        include(Disposable_mixin, Delegating_mixin()),
        function FlattenIterableEventListener(
          instance: Pick<
            EventListenerLike<Iterable<T>>,
            typeof EventListenerLike_isErrorSafe | typeof SinkLike_notify
          >,
          delegate: EventListenerLike<T>,
        ): EventListenerLike<Iterable<T>> {
          init(Disposable_mixin, instance);
          init(Delegating_mixin(), instance, delegate);

          pipe(instance, Disposable_bindTo(delegate));

          return instance;
        },
        props({}),
        {
          [EventListenerLike_isErrorSafe]: false,
          [SinkLike_notify](
            this: EventListenerLike<Iterable<T>> &
              DelegatingLike<EventListenerLike<T>>,
            next: Iterable<T>,
          ) {
            for (const v of next) {
              this[DelegatingLike_delegate][SinkLike_notify](v);
            }
          },
        },
      ),
    ))();

  return returns(EventSource_lift(createFlattenIterableEventListener));
})();

export default EventSource_flattenIterable;
