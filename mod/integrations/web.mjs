/// <reference types="./web.d.ts" />
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/mixins.mjs';
import { ignoreElements } from '../containers/ContainerLike.mjs';
import { toObservable } from '../containers/PromiseableLike.mjs';
import { keep } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, newInstance, none, isString, isEmpty, getLength, unsafeCast, isSome, raise, isFunction, compose } from '../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../rx.mjs';
import { getObserverCount, getReplay } from '../rx/MulticastObservableLike.mjs';
import { create, map, forkCombineLatest, takeWhile, forEach, keepT, keep as keep$1, throttle, subscribe } from '../rx/ObservableLike.mjs';
import { getDispatcher } from '../rx/ObserverLike.mjs';
import { sinkInto } from '../rx/ReactiveContainerLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from '../scheduling.mjs';
import { dispatch, getScheduler, dispatchTo } from '../scheduling/DispatcherLike.mjs';
import '../streaming.mjs';
import { createActionReducer, stream } from '../streaming/StreamableLike.mjs';
import create$1 from '../streaming/__internal__/StreamableLike/StreamableLike.create.mjs';
import { onDisposed, toAbortSignal, dispose, addTo } from '../util/DisposableLike.mjs';
import delegatingMixin from '../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';

/** @ignore */
const WindowLocationStreamLike_goBack = Symbol("WindowLocationStreamLike_goBack");
const reservedEvents = ["error", "open"];
const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = pipe(eventsOption, keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return create(observer => {
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
const fetch = 
/*@__PURE__*/ (() => {
    const globalFetch = self.fetch;
    return (onResponse) => fetchRequest => create(async (observer) => {
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
        catch (cause) {
            pipe(observer, dispose({ cause }));
        }
    });
})();
const addEventListener = (eventName, selector) => target => create(observer => {
    const dispatcher = pipe(observer, getDispatcher, onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        const result = selector(event);
        pipe(dispatcher, dispatch(result));
    };
    target.addEventListener(eventName, listener, { passive: true });
});
const windowLocation = 
/*@__PURE__*/ (() => {
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
    const windowHistoryReplaceState = (instance, title, uri) => {
        history.replaceState({ counter: instance.historyCounter, title }, "", uri);
    };
    const windowHistoryPushState = (instance, title, uri) => {
        instance.historyCounter++;
        history.pushState({ counter: instance.historyCounter, title }, "", uri);
    };
    const createWindowLocationStream = createInstanceFactory(mixin(include(delegatingMixin), function WindowLocationStream(instance, delegate) {
        init(delegatingMixin, instance, delegate);
        instance.delegate = delegate;
        instance.historyCounter = -1;
        return instance;
    }, props({
        delegate: none,
        historyCounter: -1,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return pipe(this.delegate, getObserverCount);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return pipe(this.delegate, getReplay);
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return pipe(this.delegate, getScheduler);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](stateOrUpdater, { replace } = { replace: false }) {
            pipe({ stateOrUpdater, replace }, dispatchTo(this.delegate));
        },
        [WindowLocationStreamLike_goBack]() {
            const canGoBack = this.historyCounter > 0;
            if (canGoBack) {
                history.back();
            }
            return canGoBack;
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.delegate, map(({ uri }) => uri), sinkInto(observer));
        },
    }));
    let currentWindowLocationStream = none;
    return create$1((scheduler, options) => {
        if (isSome(currentWindowLocationStream)) {
            raise("Cannot stream more than once");
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
        })), forkCombineLatest(compose(takeWhile(_ => windowLocationStream.historyCounter === -1), forEach(({ uri, title }) => {
            // Initialize the history state on page load
            windowLocationStream.historyCounter++;
            windowHistoryReplaceState(windowLocationStream, title, uri);
        }), ignoreElements(keepT)), compose(keep$1(({ replace, title, uri }) => {
            const titleChanged = document.title !== title;
            const uriChanged = uri !== location.href;
            return replace || (titleChanged && !uriChanged);
        }), throttle(100), forEach(({ title, uri }) => {
            document.title = title;
            windowHistoryReplaceState(windowLocationStream, title, uri);
        }), ignoreElements(keepT)), compose(keep$1(({ replace, uri }) => {
            const uriChanged = uri !== location.href;
            return !replace && uriChanged;
        }), throttle(100), forEach(({ title, uri }) => {
            document.title = title;
            windowHistoryPushState(windowLocationStream, title, uri);
        }), ignoreElements(keepT))), subscribe(scheduler), addTo(windowLocationStream));
        pipe(window, addEventListener("popstate", (e) => {
            const { counter, title } = e.state;
            const uri = {
                ...getCurrentWindowLocationURI(),
                title,
            };
            return { counter, uri };
        }), forEach(({ counter, uri }) => {
            windowLocationStream.historyCounter = counter;
            windowLocationStream[DispatcherLike_dispatch](uri, { replace: true });
        }), subscribe(scheduler), addTo(windowLocationStream));
        return windowLocationStream;
    });
})();

export { WindowLocationStreamLike_goBack, addEventListener, createEventSource, fetch, windowLocation };
