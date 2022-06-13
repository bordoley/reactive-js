/// <reference types="./web.d.ts" />
import { dispose, addTeardown, addDisposableDisposeParentOnChildError, toAbortSignal } from './disposable.mjs';
import { pipe, raise, returns } from './functions.mjs';
import { l as createObservable, ac as keep$1, L as throttle, W as onNotify$1, s as subscribe, ad as defer, o as fromPromise, a1 as observe } from './observable-01499efa.mjs';
import { keep } from './readonlyArray.mjs';
import { none, isNone } from './option.mjs';
import { createStateStore } from './stateStore.mjs';
import { onNotify, lift, map, stream } from './streamable.mjs';

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
class WindowLocationStream {
    constructor(scheduler, options) {
        this.scheduler = scheduler;
        this.options = options;
        this.historyCounter = -1;
        this.stateStream = pipe(() => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
        }), createStateStore, onNotify(({ uri }) => {
            // Initialize the history state on page load
            const isInitialPageLoad = this.historyCounter === -1;
            if (isInitialPageLoad) {
                this.historyCounter === 0;
                windowHistoryReplaceState(this, uri);
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
            updateHistoryState(this, uri);
        }), map(({ uri }) => uri), stream(scheduler, options));
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
        addDisposableDisposeParentOnChildError(this, historySubscription);
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
        this.stateStream.dispose(error);
    }
    goBack() {
        const canGoBack = this.historyCounter > 0;
        if (canGoBack) {
            window.history.back();
        }
        return canGoBack;
    }
    observe(observer) {
        this.stateStream.observe(observer);
    }
}
class WindowLocationStreamable {
    constructor() {
        this.currentStream = none;
    }
    stream(scheduler, options) {
        var _a;
        let { currentStream } = this;
        if (isNone(currentStream)) {
            currentStream = new WindowLocationStream(scheduler, options);
            this.currentStream = currentStream;
            return currentStream;
        }
        else if (currentStream.scheduler === scheduler &&
            ((_a = currentStream.options) === null || _a === void 0 ? void 0 : _a.replay) === (options === null || options === void 0 ? void 0 : options.replay)) {
            return currentStream;
        }
        else {
            return raise("Cannot stream more than once");
        }
    }
}
const windowLocation = new WindowLocationStreamable();

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

export { createEventSource, fetch, fromEvent, windowLocation };
