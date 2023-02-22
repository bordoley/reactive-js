/// <reference types="./web.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import * as Promiseable from "../containers/Promiseable.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import { compose, error, getLength, isEmpty, isFunction, isSome, isString, newInstance, none, pipe, raiseWithDebugMessage, unsafeCast, } from "../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, } from "../rx.js";
import * as MulticastObservable from "../rx/MulticastObservable.js";
import * as Observable from "../rx/Observable.js";
import * as Observer from "../rx/Observer.js";
import * as ReactiveContainer from "../rx/ReactiveContainer.js";
import { DispatcherLike_dispatch, DispatcherLike_scheduler, } from "../scheduling.js";
import * as Dispatcher from "../scheduling/Dispatcher.js";
import { StreamableLike_stream, } from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import Streamable_create from "../streaming/Streamable/__internal__/Streamable.create.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_delegatingMixin from "../util/Disposable/__internal__/Disposable.delegatingMixin.js";
/** @ignore */
export const WindowLocationStreamLike_goBack = Symbol("WindowLocationStreamLike_goBack");
/** @ignore */
export const WindowLocationStreamLike_canGoBack = Symbol("WindowLocationStreamLike_canGoBack");
const reservedEvents = ["error", "open"];
export const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = pipe(eventsOption, ReadonlyArray.keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return Observable.create(observer => {
        const dispatcher = pipe(observer, Observer.getDispatcher, Disposable.onDisposed(_ => {
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        }));
        const eventSource = newInstance(EventSource, requestURL, options);
        const listener = (ev) => {
            var _a, _b, _c;
            pipe(dispatcher, Dispatcher.dispatch({
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
export const fetch = 
/*@__PURE__*/ (() => {
    const globalFetch = self.fetch;
    return (onResponse) => fetchRequest => Observable.create(async (observer) => {
        const signal = Disposable.toAbortSignal(observer);
        let request = none;
        if (isString(fetchRequest)) {
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
                ? pipe(onResponseResult, Promiseable.toObservable())
                : onResponseResult;
            pipe(resultObs, ReactiveContainer.sinkInto(observer));
        }
        catch (e) {
            pipe(observer, Disposable.dispose(error(e)));
        }
    });
})();
export const addEventListener = (eventName, selector) => target => Observable.create(observer => {
    const dispatcher = pipe(observer, Observer.getDispatcher, Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        const result = selector(event);
        pipe(dispatcher, Dispatcher.dispatch(result));
    };
    target.addEventListener(eventName, listener, { passive: true });
});
export const windowLocation = 
/*@__PURE__*/ (() => {
    const { history, location } = window;
    const windowLocationURIToString = ({ path, query, fragment, }) => {
        let uri = isEmpty(path) ? "/" : !path.startsWith("/") ? `/_{path}` : path;
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
    const windowHistoryReplaceState = (instance, title, uri) => {
        history.replaceState({ counter: instance[WindowLocationStream_historyCounter], title }, "", uri);
    };
    const windowHistoryPushState = (instance, title, uri) => {
        instance[WindowLocationStream_historyCounter]++;
        history.pushState({ counter: instance[WindowLocationStream_historyCounter], title }, "", uri);
    };
    const WindowLocationStream_historyCounter = Symbol("WindowLocationStream_historyCounter");
    const createWindowLocationStream = createInstanceFactory(mix(include(Disposable_delegatingMixin()), function WindowLocationStream(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[WindowLocationStream_historyCounter] = -1;
        return instance;
    }, props({
        [WindowLocationStream_historyCounter]: -1,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], MulticastObservable.getObserverCount);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], MulticastObservable.getReplay);
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], Dispatcher.getScheduler);
        },
        get [WindowLocationStreamLike_canGoBack]() {
            unsafeCast(this);
            return this[WindowLocationStream_historyCounter] > 0;
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](stateOrUpdater, { replace } = { replace: false }) {
            pipe({ stateOrUpdater, replace }, Dispatcher.dispatchTo(this[DelegatingLike_delegate]));
        },
        [WindowLocationStreamLike_goBack]() {
            const canGoBack = this[WindowLocationStreamLike_canGoBack];
            if (canGoBack) {
                history.back();
            }
            return canGoBack;
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[DelegatingLike_delegate], Observable.map(({ uri }) => uri), ReactiveContainer.sinkInto(observer));
        },
    }));
    let currentWindowLocationStream = none;
    return Streamable_create((scheduler, options) => {
        if (isSome(currentWindowLocationStream)) {
            raiseWithDebugMessage("Cannot stream more than once");
        }
        const actionReducer = pipe(Streamable.createActionReducer(({ uri: stateURI }, { replace, stateOrUpdater }) => {
            const uri = isFunction(stateOrUpdater)
                ? stateOrUpdater(stateURI)
                : stateOrUpdater;
            return { uri, replace };
        }, () => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
        }), { equality: areWindowLocationStatesEqual }), Streamable.stream(scheduler, options));
        const windowLocationStream = createWindowLocationStream(actionReducer);
        pipe(actionReducer, Observable.map(({ uri, replace }) => ({
            uri: windowLocationURIToString(uri),
            title: uri.title,
            replace,
        })), Observable.forkCombineLatest(compose(Observable.takeWhile(_ => windowLocationStream[WindowLocationStream_historyCounter] ===
            -1), Observable.forEach(({ uri, title }) => {
            // Initialize the history state on page load
            windowLocationStream[WindowLocationStream_historyCounter]++;
            windowHistoryReplaceState(windowLocationStream, title, uri);
        }), Observable.ignoreElements()), compose(Observable.keep(({ replace, title, uri }) => {
            const titleChanged = document.title !== title;
            const uriChanged = uri !== location.href;
            return replace || (titleChanged && !uriChanged);
        }), Observable.throttle(100), Observable.forEach(({ title, uri }) => {
            document.title = title;
            windowHistoryReplaceState(windowLocationStream, title, uri);
        }), Observable.ignoreElements()), compose(Observable.keep(({ replace, uri }) => {
            const uriChanged = uri !== location.href;
            return !replace && uriChanged;
        }), Observable.throttle(100), Observable.forEach(({ title, uri }) => {
            document.title = title;
            windowHistoryPushState(windowLocationStream, title, uri);
        }), Observable.ignoreElements())), Observable.subscribe(scheduler), Disposable.addTo(windowLocationStream));
        pipe(window, addEventListener("popstate", (e) => {
            const { counter, title } = e.state;
            const uri = {
                ...getCurrentWindowLocationURI(),
                title,
            };
            return { counter, uri };
        }), Observable.forEach(({ counter, uri }) => {
            windowLocationStream[WindowLocationStream_historyCounter] = counter;
            windowLocationStream[DispatcherLike_dispatch](uri, { replace: true });
        }), Observable.subscribe(scheduler), Disposable.addTo(windowLocationStream));
        return windowLocationStream;
    });
})();
