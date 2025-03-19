import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import * as Broadcaster from "../computations/Broadcaster.js";
import { BroadcasterLike } from "../computations.js";
import { bindMethod, newInstance, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DisposableLike, ListenerLike_notify } from "../utils.js";

const errorEvent = "error";

const reservedEvents = [errorEvent, "open"];

export const create = (
  url: string | URL,
  options: EventSourceInit & {
    readonly events?: readonly string[];
  } = {},
): BroadcasterLike<MessageEvent> & DisposableLike => {
  const events = pipe(
    options.events ?? ["message"],
    ReadonlyArray.keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = String(url);

  return Broadcaster.create(sink => {
    const eventSource = newInstance(global.EventSource, requestURL, options);

    const onMessage = bindMethod(sink, ListenerLike_notify);

    const onError = Disposable.toErrorHandler(sink);

    for (const ev of events) {
      eventSource.addEventListener(ev, onMessage);
    }

    eventSource.addEventListener(errorEvent, onError);

    pipe(
      sink,
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
