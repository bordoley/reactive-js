import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import * as EventSource from "../computations/EventSource.js";
import { EventSourceLike } from "../computations.js";
import { bindMethod, newInstance, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DisposableLike, EventListenerLike_notify } from "../utils.js";

const errorEvent = "error";

const reservedEvents = [errorEvent, "open"];

export const create = (
  url: string | URL,
  options: EventSourceInit & {
    readonly events?: readonly string[];
  } = {},
): EventSourceLike<MessageEvent> & DisposableLike => {
  const events = pipe(
    options.events ?? ["message"],
    ReadonlyArray.keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = String(url);

  return EventSource.create(listener => {
    const eventSource = newInstance(global.EventSource, requestURL, options);

    const onMessage = bindMethod(listener, EventListenerLike_notify);

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
