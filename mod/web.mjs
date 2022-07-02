/// <reference types="./web.d.ts" />
import { dispatch, dispatchTo } from './dispatcher.mjs';
import { onDisposed, bindTo, addTo, toAbortSignal, dispose } from './disposable.mjs';
import { pipe, newInstance, isEmpty, getLength, raise, newInstanceWith, compose, returns } from './functions.mjs';
import { createObservable, map, forkCombineLatest, takeWhile, onNotify, keepT, keep as keep$1, throttle, subscribe, defer, fromPromise } from './observable.mjs';
import { getDispatcher } from './observer.mjs';
import { keep } from './__internal__.readonlyArray.mjs';
import { ignoreElements } from './container.mjs';
import { getDelegate } from './liftable.mjs';
import { none, isSome } from './option.mjs';
import { sinkInto } from './source.mjs';
import { AbstractDelegatingStream } from './stream.mjs';
import { createStreamble, createActionReducer, stream } from './streamable.mjs';

const fromEvent = (target, eventName, selector) => createObservable(observer => {
    const dispatcher = pipe(observer, getDispatcher, onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        const result = selector(event);
        pipe(dispatcher, dispatch(result));
    };
    target.addEventListener(eventName, listener, { passive: true });
});

const reservedEvents = ["error", "open"];
const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = pipe(eventsOption, keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return createObservable(observer => {
        const dispatcher = pipe(observer, getDispatcher, onDisposed(_ => {
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        }));
        const eventSource = newInstance(EventSource, requestURL, options);
        const listener = (ev) => {
            var _a, _b, _c;
            pipe(dispatcher, dispatch({
                id: (_a = ev.lastEventId) !== null && _a !== void 0 ? _a : "",
                type: (_b = ev.type) !== null && _b !== void 0 ? _b : "",
                data: (_c = ev.data) !== null && _c !== void 0 ? _c : "",
            }));
        };
        for (const ev of events) {
            eventSource.addEventListener(ev, listener);
        }
    });
};

const { history, location } = window;
const windowLocationURIToString = ({ path, query, fragment, }) => {
    let uri = isEmpty(path) ? "/" : !path.startsWith("/") ? `/${path}` : path;
    uri = getLength(query) > 0 ? `${uri}?${query}` : uri;
    uri = getLength(fragment) > 0 ? `${uri}#${fragment}` : uri;
    return newInstance(URL, uri, location.href).toString();
};
const getCurrentWindowLocationURI = () => {
    const { pathname: path, search: query, hash: fragment, } = newInstance(URL, location.href);
    return {
        title: document.title,
        path,
        query: query.slice(1),
        fragment: fragment.slice(1),
    };
};
const areWindowLocationStatesEqual = ({ uri: a }, { uri: b }) => 
// Intentionally ignore the replace flag.
a === b ||
    (a.title === b.title &&
        a.path === b.path &&
        a.query === b.query &&
        a.fragment === b.fragment);
const windowHistoryReplaceState = (self, title, uri) => {
    history.replaceState({ counter: self.historyCounter, title }, "", uri);
};
const windowHistoryPushState = (self, title, uri) => {
    self.historyCounter++;
    history.pushState({ counter: self.historyCounter, title }, "", uri);
};
class WindowLocationStream extends AbstractDelegatingStream {
    constructor() {
        super(...arguments);
        this.historyCounter = -1;
    }
    dispatch(stateOrUpdater, { replace } = { replace: false }) {
        pipe({ stateOrUpdater, replace }, dispatchTo(getDelegate(this)));
    }
    goBack() {
        const canGoBack = this.historyCounter > 0;
        if (canGoBack) {
            history.back();
        }
        return canGoBack;
    }
    sink(observer) {
        pipe(this, getDelegate, map(({ uri }) => uri), sinkInto(observer));
    }
}
let currentWindowLocationStream = none;
const windowLocation = 
/*@__PURE__*/ createStreamble((scheduler, options) => {
    if (isSome(currentWindowLocationStream)) {
        raise("Cannot stream more than once");
    }
    const actionReducer = pipe(createActionReducer(({ uri: stateURI }, { replace, stateOrUpdater }) => {
        const uri = typeof stateOrUpdater === "function"
            ? stateOrUpdater(stateURI)
            : stateOrUpdater;
        return { uri, replace };
    }, () => ({
        replace: true,
        uri: getCurrentWindowLocationURI(),
    }), { equality: areWindowLocationStatesEqual }), stream(scheduler, options));
    const windowLocationStream = pipe(WindowLocationStream, newInstanceWith(actionReducer), bindTo(actionReducer));
    pipe(actionReducer, map(({ uri, replace }) => ({
        uri: windowLocationURIToString(uri),
        title: uri.title,
        replace,
    })), forkCombineLatest(compose(takeWhile(_ => windowLocationStream.historyCounter === -1), onNotify(({ uri, title }) => {
        // Initialize the history state on page load
        windowLocationStream.historyCounter++;
        windowHistoryReplaceState(windowLocationStream, title, uri);
    }), ignoreElements(keepT)), compose(keep$1(({ replace, title, uri }) => {
        const titleChanged = document.title !== title;
        const uriChanged = uri !== location.href;
        return replace || (titleChanged && !uriChanged);
    }), throttle(100), onNotify(({ title, uri }) => {
        document.title = title;
        windowHistoryReplaceState(windowLocationStream, title, uri);
    }), ignoreElements(keepT)), compose(keep$1(({ replace, uri }) => {
        const uriChanged = uri !== location.href;
        return !replace && uriChanged;
    }), throttle(100), onNotify(({ title, uri }) => {
        document.title = title;
        windowHistoryPushState(windowLocationStream, title, uri);
    }), ignoreElements(keepT))), subscribe(scheduler), addTo(windowLocationStream));
    pipe(fromEvent(window, "popstate", (e) => {
        const { counter, title } = e.state;
        const uri = {
            ...getCurrentWindowLocationURI(),
            title,
        };
        return { counter, uri };
    }), onNotify(({ counter, uri }) => {
        windowLocationStream.historyCounter = counter;
        windowLocationStream.dispatch(uri, { replace: true });
    }), subscribe(scheduler), addTo(windowLocationStream));
    return windowLocationStream;
});

const globalFetch = self.fetch;
const fetch = (onResponse) => fetchRequest => defer(() => async (observer) => {
    const signal = toAbortSignal(observer);
    let request = none;
    if (typeof fetchRequest === "string") {
        request = fetchRequest;
    }
    else {
        const { uri, ...requestInit } = fetchRequest;
        request = newInstance(Request, uri, requestInit);
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
