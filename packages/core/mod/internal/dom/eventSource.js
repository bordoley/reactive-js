import { createObservable } from "../../observable.js";
const reservedEvents = ["error", "open"];
export const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = eventsOption.filter(x => !reservedEvents.includes(x));
    const requestURL = url instanceof URL ? url.toString() : url;
    return createObservable(subscriber => {
        const eventSource = new EventSource(requestURL, options);
        const listener = (ev) => {
            subscriber.dispatch({
                id: ev.lastEventId ?? "",
                type: ev.type ?? "",
                data: ev.data ?? "",
            });
        };
        subscriber.add(_ => {
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        });
        for (const ev of events) {
            eventSource.addEventListener(ev, listener);
        }
    });
};
