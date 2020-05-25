import { addTeardown } from "../../disposable.ts";
import { pipe } from "../../functions.ts";
import { createObservable, ObservableLike, dispatch } from "../../observable.ts";
import { keep } from "../../readonlyArray.ts";

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

  return createObservable(dispatcher => {
    const eventSource = new EventSource(requestURL, options);
    const listener = (ev: MessageEvent) => {
      dispatch(dispatcher, {
        id: ev.lastEventId ?? "",
        type: ev.type ?? "",
        data: ev.data ?? "",
      });
    };

    addTeardown(dispatcher, _ => {
      for (const ev of events) {
        eventSource.removeEventListener(ev, listener as EventListener);
      }
      eventSource.close();
    });

    for (const ev of events) {
      eventSource.addEventListener(ev, listener as EventListener);
    }
  });
};
