import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as EventSource from "../../events/EventSource.js";
import { EventListenerLike_notify, EventSourceLike } from "../../events.js";
import { newInstance, pipe } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";

const errorEvent = "error";

const reservedEvents = [errorEvent, "open"];

export const create = (
  url: string | URL,
  options: EventSourceInit & {
    readonly events?: readonly string[];
  } = {},
): EventSourceLike<{
  readonly id: string;
  readonly type: string;
  readonly data: string;
}> => {
  const events = pipe(
    options.events ?? ["message"],
    ReadonlyArray.keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = url instanceof URL ? url.toString() : url;

  return EventSource.create(listener => {
    const eventSource = newInstance(global.EventSource, requestURL, options);

    const onMessage = (ev: MessageEvent) => {
      listener[EventListenerLike_notify]({
        id: ev.lastEventId ?? "",
        type: ev.type ?? "",
        data: ev.data ?? "",
      });
    };

    const onError = Disposable.toErrorHandler(listener);

    for (const ev of events) {
      eventSource.addEventListener(ev, onMessage);
    }

    eventSource.addEventListener(errorEvent, onError);

    pipe(
      listener,
      DisposableContainer.onDisposed(_ => {
        eventSource.removeEventListener(errorEvent, onError);

        for (const ev of events) {
          eventSource.removeEventListener(ev, onMessage);
        }
        eventSource.close();
      }),
    );
  });
};
