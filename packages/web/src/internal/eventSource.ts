import { createObservable, ObservableLike } from "@reactive-js/observable";

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

  return createObservable(subscriber => {
    const eventSource = new EventSource(requestURL, options);
    const listener = (ev: MessageEvent) => {
      subscriber.dispatch({
        id: ev.lastEventId ?? "",
        type: ev.type ?? "",
        data: ev.data ?? "",
      });
    };

    subscriber.add(_ => {
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
