import { mixInstanceFactory, props } from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../../events.js";
import {
  Optional,
  SideEffect1,
  error,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import * as Publisher from "../../Publisher.js";

const EventSource_create: EventSource.Signature["create"] = /*@__PURE__*/ (<
  T,
>() => {
  const CreateEventSource_delegate = Symbol("CreateEventSource_delegate");
  const CreateEventSource_setup = Symbol("CreateEventSource_setup");

  type TProperties = {
    [CreateEventSource_delegate]: Optional<PublisherLike<T>>;
    [CreateEventSource_setup]: SideEffect1<EventListenerLike<T>>;
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
      instance[CreateEventSource_setup] = setup;
      return instance;
    },
    props<TProperties>({
      [CreateEventSource_delegate]: none,
      [CreateEventSource_setup]: none,
    }),
    {
      [EventSourceLike_addEventListener](
        this: TProperties,
        listener: EventListenerLike,
      ) {
        const delegate =
          this[CreateEventSource_delegate] ??
          (() => {
            const delegate = pipe(
              Publisher.create<T>({
                autoDispose: true,
              }),
              Disposable.onDisposed(() => {
                this[CreateEventSource_delegate] = none;
              }),
            );

            this[CreateEventSource_delegate] = delegate;
            try {
              this[CreateEventSource_setup](delegate);
            } catch (e) {
              delegate[DisposableLike_dispose](error(e));
            }

            return delegate;
          })();

        delegate[EventSourceLike_addEventListener](listener);
      },
    },
  );
})();

export default EventSource_create;
