import { createObservable } from "../../observable.js";
const reservedEvents = ["error", "open"];
export const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = eventsOption.filter(x => !reservedEvents.includes(x));
    const requestURL = url instanceof URL ? url.toString() : url;
    return createObservable(dispatcher => {
        const eventSource = new EventSource(requestURL, options);
        const listener = (ev) => {
            var _a, _b, _c;
            dispatcher.dispatch({
                id: (_a = ev.lastEventId) !== null && _a !== void 0 ? _a : "",
                type: (_b = ev.type) !== null && _b !== void 0 ? _b : "",
                data: (_c = ev.data) !== null && _c !== void 0 ? _c : "",
            });
        };
        dispatcher.add(_ => {
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
