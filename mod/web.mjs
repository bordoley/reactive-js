/// <reference types="./web.d.ts" />
import { dispose, addTeardown, addDisposableDisposeParentOnChildError, toAbortSignal } from './disposable.mjs';
import { pipe, raise, returns } from './functions.mjs';
import { createObservable, onNotify, keep as keep$1, throttle, map, subscribe, defer, fromPromise } from './observable.mjs';
import { keep } from './readonlyArray.mjs';
import { none, isNone } from './option.mjs';
import { AbstractSource, sinkInto } from './source.mjs';
import { createStateStore, lift, stream } from './streamable.mjs';

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

const windowLocationURIToString = ({ path, query, fragment, }) => new URL(`${path}?${query}#${fragment}`, window.location.href).toString();
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
const windowHistoryReplaceState = (self, uri) => {
    const { title } = uri;
    window.history.replaceState({ counter: self.historyCounter, title }, "", windowLocationURIToString(uri));
};
const windowHistoryPushState = (self, uri) => {
    const { title } = uri;
    self.historyCounter++;
    window.history.pushState({ counter: self.historyCounter, title }, "", windowLocationURIToString(uri));
};
class WindowLocationStream extends AbstractSource {
    constructor(stateStream) {
        super();
        this.stateStream = stateStream;
        this.historyCounter = -1;
    }
    get error() {
        return this.stateStream.error;
    }
    get isDisposed() {
        return this.stateStream.isDisposed;
    }
    get isSynchronous() {
        return this.stateStream.isSynchronous;
    }
    get observerCount() {
        return this.stateStream.observerCount;
    }
    add(disposable) {
        this.stateStream.add(disposable);
    }
    dispatch(stateOrUpdater, { replace } = { replace: false }) {
        this.stateStream.dispatch(state => {
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
    dispose(error) {
        pipe(this.stateStream, dispose(error));
    }
    goBack() {
        const canGoBack = this.historyCounter > 0;
        if (canGoBack) {
            window.history.back();
        }
        return canGoBack;
    }
    sink(observer) {
        this.stateStream.sink(observer);
    }
}
class WindowLocationStreamable {
    constructor() {
        this.currentStream = none;
    }
    stream(scheduler, options) {
        let { currentStream } = this;
        if (isNone(currentStream)) {
            const stateStream = pipe(() => ({
                replace: true,
                uri: getCurrentWindowLocationURI(),
            }), createStateStore, lift(onNotify(({ uri }) => {
                // Initialize the history state on page load
                const isInitialPageLoad = windowLocationStream.historyCounter === -1;
                if (isInitialPageLoad) {
                    windowLocationStream.historyCounter === 0;
                    windowHistoryReplaceState(windowLocationStream, uri);
                }
            })), lift(keep$1(({ uri }) => {
                const { title } = uri;
                const uriString = windowLocationURIToString(uri);
                const titleChanged = document.title !== title;
                const uriChanged = uriString !== window.location.href;
                return titleChanged || uriChanged;
            })), lift(throttle(300)), lift(onNotify(({ replace, uri }) => {
                const { title } = uri;
                const uriString = windowLocationURIToString(uri);
                const titleChanged = document.title !== title;
                const uriChanged = uriString !== window.location.href;
                const shouldReplace = replace || (titleChanged && !uriChanged);
                const updateHistoryState = shouldReplace
                    ? windowHistoryReplaceState
                    : windowHistoryPushState;
                document.title = title;
                updateHistoryState(windowLocationStream, uri);
            })), lift(map(({ uri }) => uri)), stream(scheduler, options));
            const windowLocationStream = new WindowLocationStream(stateStream);
            const historySubscription = pipe(fromEvent(window, "popstate", (e) => {
                const { counter, title } = e.state;
                const uri = {
                    ...getCurrentWindowLocationURI(),
                    title,
                };
                return { counter, uri };
            }), onNotify(({ counter, uri }) => {
                windowLocationStream.historyCounter = counter;
                windowLocationStream.dispatch(uri, { replace: true });
            }), subscribe(scheduler));
            addDisposableDisposeParentOnChildError(windowLocationStream, historySubscription);
            return windowLocationStream;
        }
        else {
            return raise("Cannot stream more than once");
        }
    }
}
const windowLocation = new WindowLocationStreamable();

const globalFetch = self.fetch;
const fetch = (onResponse) => fetchRequest => defer(() => async (observer) => {
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
        pipe(resultObs, sinkInto(observer));
    }
    catch (cause) {
        pipe(observer, dispose({ cause }));
    }
});

export { createEventSource, fetch, fromEvent, windowLocation };
