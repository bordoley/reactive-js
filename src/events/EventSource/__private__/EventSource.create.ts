import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../../events.js";
import {
  Function1,
  Optional,
  SideEffect1,
  error,
  none,
  pipe,
} from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as EventSource from "../../EventSource.js";
import * as Publisher from "../../Publisher.js";

const CreateEventSource_delegate = Symbol("CreateEventSource_delegate");
const CreateEventSource_createDelegate = Symbol(
  "CreateEventSource_createDelegate",
);

const EventSource_create: EventSource.Signature["create"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    [CreateEventSource_delegate]: Optional<PublisherLike<T>>;
    [CreateEventSource_createDelegate]: Function1<
      EventListenerLike<T>,
      PublisherLike<T>
    >;
  };

  return mixInstanceFactory(
    function CreateEventSource(
      instance: Pick<
        EventSourceLike<T>,
        typeof EventSourceLike_addEventListener
      > &
        TProperties,
      setup: SideEffect1<EventListenerLike<T>>,
    ): EventSourceLike<T> {
      // Pass in the initial listener to the setup function
      // so that we can connect it to the publisher before
      // the setup function is run, in case the setup function
      // publishes notifications. useful for testing.
      instance[CreateEventSource_createDelegate] = (
        listener: EventListenerLike<T>,
      ) => {
        const delegate = pipe(
          Publisher.create<T>({
            autoDispose: true,
          }),
          Disposable.onDisposed(() => {
            instance[CreateEventSource_delegate] = none;
          }),
        );

        delegate[EventSourceLike_addEventListener](listener);

        instance[CreateEventSource_delegate] = delegate;
        try {
          setup(delegate);
        } catch (e) {
          delegate[DisposableLike_dispose](error(e));
        }

        return delegate;
      };

      return instance;
    },
    props<TProperties>({
      [CreateEventSource_delegate]: none,
      [CreateEventSource_createDelegate]: none,
    }),
    {
      [EventSourceLike_addEventListener](
        this: TProperties,
        listener: EventListenerLike,
      ) {
        const delegate =
          this[CreateEventSource_delegate] ??
          this[CreateEventSource_createDelegate](listener);

        delegate[EventSourceLike_addEventListener](listener);
      },
    },
  );
})();

export default EventSource_create;
