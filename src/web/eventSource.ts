import { dispatch } from "../dispatcher";
import { onDisposed } from "../disposable";
import { newInstance, pipe } from "../functions";
import { ObservableLike, createObservable } from "../observable";
import { getDispatcher } from "../observer";
import { keep } from "../readonlyArray";

const reservedEvents = ["error", "open"];

export const createEventSource = (
  url: string | URL,
  options: EventSourceInit & {
    readonly events?: readonly string[];
  } = {},
): ObservableLike<{
  readonly id: string;
  readonly type: string;
  readonly data: string;
}> => {
  const { events: eventsOption = ["message"] } = options;
  const events = pipe(
    eventsOption,
    keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = url instanceof URL ? url.toString() : url;

  return createObservable(observer => {
    const dispatcher = pipe(
      observer,
      getDispatcher,
      onDisposed(_ => {
        for (const ev of events) {
          eventSource.removeEventListener(ev, listener as EventListener);
        }
        eventSource.close();
      }),
    );

    const eventSource = newInstance(EventSource, requestURL, options);
    const listener = (ev: MessageEvent) => {
      pipe(
        dispatcher,
        dispatch({
          id: ev.lastEventId ?? "",
          type: ev.type ?? "",
          data: ev.data ?? "",
        }),
      );
    };

    for (const ev of events) {
      eventSource.addEventListener(ev, listener as EventListener);
    }
  });
};
