/// <reference types="./web.d.ts" />
import { isNone, none, isSome } from './option.mjs';
import { pipe, raise, returns } from './functions.mjs';
import { createObservable, keep as keep$1, throttle, onNotify as onNotify$1, subscribe, defer, fromPromise, observe } from './observable.mjs';
import { dispose, addTeardown, toAbortSignal } from './disposable.mjs';
import { keep } from './readonlyArray.mjs';
import { onNotify, lift, map, stream } from './streamable.mjs';
import { createStateStore } from './stateStore.mjs';

const fromEvent = (target, eventName, selector) => createObservable(dispatcher => {
    const listener = (event) => {
        try {
            const result = selector(event);
            dispatcher.dispatch(result);
        }
        catch (cause) {
            pipe(dispatcher, dispose({ cause }));
        }
    };
    target.addEventListener(eventName, listener, { passive: true });
    addTeardown(dispatcher, () => {
        target.removeEventListener(eventName, listener);
    });
});

const reservedEvents = ["error", "open"];
const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = pipe(eventsOption, keep(x => !reservedEvents.includes(x)));
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
        addTeardown(dispatcher, _ => {
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

const windowLocationURIToString = ({ path, query, fragment, }) => new URL(`${path}${query}${fragment}`, window.location.href).toString();
const getCurrentWindowLocationURI = () => {
    const uri = new URL(window.location.href);
    return {
        title: document.title,
        path: uri.pathname,
        query: uri.search,
        fragment: uri.hash,
    };
};
const areWindowLocationURIsEqual = (a, b) => a === b ||
    (a.title === b.title &&
        a.path === b.path &&
        a.query === b.query &&
        a.fragment === b.fragment);
function getStateStream() {
    const { stateStream } = this;
    return isNone(stateStream)
        ? raise("HistoryStream is not initialized")
        : stateStream;
}
function windowHistoryReplaceState(uri) {
    const { title } = uri;
    window.history.replaceState({ counter: this.historyCounter, title }, "", windowLocationURIToString(uri));
}
function windowHistoryPushState(uri) {
    const { title } = uri;
    this.historyCounter++;
    window.history.pushState({ counter: this.historyCounter, title }, "", windowLocationURIToString(uri));
}
class HistoryStream {
    constructor() {
        this.historyCounter = -1;
        this.stateStream = none;
    }
    get isSynchronous() {
        return getStateStream.call(this).isSynchronous;
    }
    dispatch(stateOrUpdater, { replace } = { replace: false }) {
        const stateStream = getStateStream.call(this);
        stateStream.dispatch(state => {
            const { uri: stateURI } = state;
            const newURI = typeof stateOrUpdater === "function"
                ? stateOrUpdater(stateURI)
                : stateOrUpdater;
            return areWindowLocationURIsEqual(stateURI, newURI)
                ? state
                : {
                    uri: newURI,
                    replace,
                };
        });
    }
    goBack() {
        const canGoBack = this.historyCounter > 0;
        if (canGoBack) {
            window.history.back();
        }
        return canGoBack;
    }
    observe(observer) {
        getStateStream.call(this).observe(observer);
    }
    init(scheduler) {
        let stateStream = this.stateStream;
        if (isSome(stateStream) && !stateStream.isDisposed) {
            raise("HistoryStream is already initialized");
        }
        stateStream = pipe(() => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
        }), createStateStore, onNotify(({ uri }) => {
            // Initialize the history state on page load
            const isInitialPageLoad = this.historyCounter === -1;
            if (isInitialPageLoad) {
                this.historyCounter === 0;
                windowHistoryReplaceState.call(this, uri);
            }
        }), lift(keep$1(({ uri }) => {
            const { title } = uri;
            const uriString = windowLocationURIToString(uri);
            const titleChanged = document.title !== title;
            const uriChanged = uriString !== window.location.href;
            return titleChanged || uriChanged;
        })), lift(throttle(300)), onNotify(({ replace, uri }) => {
            const { title } = uri;
            const uriString = windowLocationURIToString(uri);
            const titleChanged = document.title !== title;
            const uriChanged = uriString !== window.location.href;
            const shouldReplace = replace || (titleChanged && !uriChanged);
            const updateHistoryState = shouldReplace
                ? windowHistoryReplaceState
                : windowHistoryPushState;
            document.title = title;
            updateHistoryState.call(this, uri);
        }), map(({ uri }) => uri), stream(scheduler));
        const historySubscription = pipe(fromEvent(window, "popstate", (e) => {
            const { counter, title } = e.state;
            const uri = {
                ...getCurrentWindowLocationURI(),
                title,
            };
            return { counter, uri };
        }), onNotify$1(({ counter, uri }) => {
            this.historyCounter = counter;
            this.dispatch(uri, { replace: true });
        }), subscribe(scheduler));
        stateStream.add(historySubscription);
        this.stateStream = stateStream;
        return stateStream;
    }
}
const historyStream = new HistoryStream();

const globalFetch = self.fetch;
const fetch = (onResponse) => fetchRequest => defer(observer => async () => {
    const signal = toAbortSignal(observer);
    let request = none;
    if (typeof fetchRequest === "string") {
        request = fetchRequest;
    }
    else {
        const { uri, ...requestInit } = fetchRequest;
        request = new Request(uri, requestInit);
    }
    // This try/catch is necessary because we await in the try block.
    try {
        const response = await globalFetch(request, { signal });
        const onResponseResult = onResponse(response);
        const resultObs = onResponseResult instanceof Promise
            ? fromPromise(returns(onResponseResult))
            : onResponseResult;
        pipe(resultObs, observe(observer));
    }
    catch (cause) {
        pipe(observer, dispose({ cause }));
    }
});

export { createEventSource, fetch, fromEvent, historyStream };
