import { createObservable, ObservableLike, dispatch } from "../../observable.ts";
import { add } from "../../disposable.ts";

const reservedEvents = ["error", "open"];

export const createEventSource = (
  url: string | URL,
  options: EventSourceInit & {
    events?: readonly string[];
  } = {},
): ObservableLike<{
  id: string;
  type: string;
  data: string;
}> => {
  const { events: eventsOption = ["message"] } = options;
  const events = eventsOption.filter(x => !reservedEvents.includes(x));
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

    add(dispatcher, _ => {
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
