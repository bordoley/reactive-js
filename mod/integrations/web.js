/// <reference types="./web.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { ignoreElements } from "../containers/Container.js";
import { toObservable } from "../containers/Promiseable.js";
import { keep } from "../containers/ReadonlyArray.js";
import { compose, error, getLength, isEmpty, isFunction, isSome, isString, newInstance, none, pipe, raiseWithDebugMessage, unsafeCast, } from "../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, } from "../rx.js";
import { getObserverCount, getReplay } from "../rx/MulticastObservable.js";
import { create as createObservable, forEach as forEachObs, forkCombineLatest, keep as keepObs, map, subscribe, takeWhile, throttle, } from "../rx/Observable.js";
import { getDispatcher } from "../rx/Observer.js";
import { sinkInto } from "../rx/ReactiveContainer.js";
import { DispatcherLike_dispatch, DispatcherLike_scheduler, } from "../scheduling.js";
import { dispatch, dispatchTo, getScheduler, } from "../scheduling/Dispatcher.js";
import { StreamableLike_stream, } from "../streaming.js";
import { createActionReducer, stream } from "../streaming/Streamable.js";
import Streamable_create from "../streaming/Streamable/__internal__/Streamable.create.js";
import { addTo, dispose, onDisposed, toAbortSignal, } from "../util/Disposable.js";
import Disposable_delegatingMixin from "../util/Disposable/__internal__/Disposable.delegatingMixin.js";
/** @ignore */
export const WindowLocationStreamLike_goBack = Symbol("WindowLocationStreamLike_goBack");
/** @ignore */
export const WindowLocationStreamLike_canGoBack = Symbol("WindowLocationStreamLike_canGoBack");
const reservedEvents = ["error", "open"];
export const createEventSource = (url, options = {}) => {
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
export const fetch = 
/*@__PURE__*/ (() => {
    const globalFetch = self.fetch;
    return (onResponse) => fetchRequest => createObservable(async (observer) => {
        const signal = toAbortSignal(observer);
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
                ? pipe(onResponseResult, toObservable())
                : onResponseResult;
            pipe(resultObs, sinkInto(observer));
        }
        catch (e) {
            pipe(observer, dispose(error(e)));
        }
    });
})();
export const addEventListener = (eventName, selector) => target => createObservable(observer => {
    const dispatcher = pipe(observer, getDispatcher, onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        const result = selector(event);
        pipe(dispatcher, dispatch(result));
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
            return pipe(this[DelegatingLike_delegate], getObserverCount);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], getReplay);
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], getScheduler);
        },
        get [WindowLocationStreamLike_canGoBack]() {
            unsafeCast(this);
            return this[WindowLocationStream_historyCounter] > 0;
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](stateOrUpdater, { replace } = { replace: false }) {
            pipe({ stateOrUpdater, replace }, dispatchTo(this[DelegatingLike_delegate]));
        },
        [WindowLocationStreamLike_goBack]() {
            const canGoBack = this[WindowLocationStreamLike_canGoBack];
            if (canGoBack) {
                history.back();
            }
            return canGoBack;
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[DelegatingLike_delegate], map(({ uri }) => uri), sinkInto(observer));
        },
    }));
    let currentWindowLocationStream = none;
    return Streamable_create((scheduler, options) => {
        if (isSome(currentWindowLocationStream)) {
            raiseWithDebugMessage("Cannot stream more than once");
        }
        const actionReducer = pipe(createActionReducer(({ uri: stateURI }, { replace, stateOrUpdater }) => {
            const uri = isFunction(stateOrUpdater)
                ? stateOrUpdater(stateURI)
                : stateOrUpdater;
            return { uri, replace };
        }, () => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
        }), { equality: areWindowLocationStatesEqual }), stream(scheduler, options));
        const windowLocationStream = createWindowLocationStream(actionReducer);
        pipe(actionReducer, map(({ uri, replace }) => ({
            uri: windowLocationURIToString(uri),
            title: uri.title,
            replace,
        })), forkCombineLatest(compose(takeWhile(_ => windowLocationStream[WindowLocationStream_historyCounter] ===
            -1), forEachObs(({ uri, title }) => {
            // Initialize the history state on page load
            windowLocationStream[WindowLocationStream_historyCounter]++;
            windowHistoryReplaceState(windowLocationStream, title, uri);
        }), ignoreElements({ keep: keepObs })), compose(keepObs(({ replace, title, uri }) => {
            const titleChanged = document.title !== title;
            const uriChanged = uri !== location.href;
            return replace || (titleChanged && !uriChanged);
        }), throttle(100), forEachObs(({ title, uri }) => {
            document.title = title;
            windowHistoryReplaceState(windowLocationStream, title, uri);
        }), ignoreElements({ keep: keepObs })), compose(keepObs(({ replace, uri }) => {
            const uriChanged = uri !== location.href;
            return !replace && uriChanged;
        }), throttle(100), forEachObs(({ title, uri }) => {
            document.title = title;
            windowHistoryPushState(windowLocationStream, title, uri);
        }), ignoreElements({ keep: keepObs }))), subscribe(scheduler), addTo(windowLocationStream));
        pipe(window, addEventListener("popstate", (e) => {
            const { counter, title } = e.state;
            const uri = {
                ...getCurrentWindowLocationURI(),
                title,
            };
            return { counter, uri };
        }), forEachObs(({ counter, uri }) => {
            windowLocationStream[WindowLocationStream_historyCounter] = counter;
            windowLocationStream[DispatcherLike_dispatch](uri, { replace: true });
        }), subscribe(scheduler), addTo(windowLocationStream));
        return windowLocationStream;
    });
})();
