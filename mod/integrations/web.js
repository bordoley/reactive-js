/// <reference types="./web.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { DisposableLike_dispose, WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack, WindowLocationStream_historyCounter, } from "../__internal__/symbols.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import { compose, error, isFunction, isSome, newInstance, none, pipe, raiseWithDebugMessage, unsafeCast, } from "../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { StreamableLike_stream, } from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import Streamable_create from "../streaming/Streamable/__internal__/Streamable.create.js";
import { QueueableLike_maxBufferSize, QueueableLike_push } from "../util.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_delegatingMixin from "../util/Disposable/__internal__/Disposable.delegatingMixin.js";
export { WindowLocationStreamLike_goBack, WindowLocationStreamLike_canGoBack };
const errorEvent = "error";
const reservedEvents = [errorEvent, "open"];
export const createEventSource = (url, options = {}) => {
    const { events: eventsOption = ["message"] } = options;
    const events = pipe(eventsOption, ReadonlyArray.keep(x => !reservedEvents.includes(x)));
    const requestURL = url instanceof URL ? url.toString() : url;
    return Observable.create(observer => {
        pipe(observer, Disposable.onDisposed(_ => {
            eventSource.removeEventListener(errorEvent, onError);
            for (const ev of events) {
                eventSource.removeEventListener(ev, listener);
            }
            eventSource.close();
        }));
        const eventSource = newInstance(EventSource, requestURL, options);
        const listener = (ev) => {
            var _a, _b, _c;
            observer[QueueableLike_push]({
                id: (_a = ev.lastEventId) !== null && _a !== void 0 ? _a : "",
                type: (_b = ev.type) !== null && _b !== void 0 ? _b : "",
                data: (_c = ev.data) !== null && _c !== void 0 ? _c : "",
            });
        };
        const onError = (e) => {
            observer[DisposableLike_dispose](error(e));
        };
        eventSource.addEventListener(errorEvent, onError);
        for (const ev of events) {
            eventSource.addEventListener(ev, listener);
        }
    });
};
export const addEventListener = (eventName, selector) => target => Observable.create(observer => {
    pipe(observer, Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        const result = selector(event);
        observer[QueueableLike_push](result);
    };
    target.addEventListener(eventName, listener, { passive: true });
});
export const windowLocation = /*@__PURE__*/ (() => {
    const { history, location } = window;
    const windowLocationURIToString = ({ path, query, fragment, }) => {
        let uri = path.length === 0 ? "/" : !path.startsWith("/") ? `/_{path}` : path;
        uri = query.length > 0 ? `${uri}?${query}` : uri;
        uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;
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
    const createWindowLocationStream = createInstanceFactory(mix(include(Disposable_delegatingMixin()), function WindowLocationStream(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[WindowLocationStream_historyCounter] = -1;
        return instance;
    }, props({
        [WindowLocationStream_historyCounter]: -1,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [QueueableLike_maxBufferSize]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        get [WindowLocationStreamLike_canGoBack]() {
            unsafeCast(this);
            return this[WindowLocationStream_historyCounter] > 0;
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_complete]() {
            this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
        [QueueableLike_push](stateOrUpdater, { replace } = { replace: false }) {
            return this[DelegatingLike_delegate][QueueableLike_push]({
                stateOrUpdater,
                replace,
            });
        },
        [WindowLocationStreamLike_goBack]() {
            const canGoBack = this[WindowLocationStreamLike_canGoBack];
            if (canGoBack) {
                history.back();
            }
            return canGoBack;
        },
        [ObservableLike_observe](observer) {
            pipe(this[DelegatingLike_delegate], Observable.map(({ uri }) => uri), Observable.observeWith(observer));
        },
    }));
    let currentWindowLocationStream = none;
    return Streamable_create((scheduler, options) => {
        if (isSome(currentWindowLocationStream)) {
            raiseWithDebugMessage("Cannot stream more than once");
        }
        const actionReducer = Streamable.createActionReducer(({ uri: stateURI }, { replace, stateOrUpdater }) => {
            const uri = isFunction(stateOrUpdater)
                ? stateOrUpdater(stateURI)
                : stateOrUpdater;
            return { uri, replace };
        }, () => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
        }), { equality: areWindowLocationStatesEqual })[StreamableLike_stream](scheduler, options);
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
            windowLocationStream[QueueableLike_push](uri, { replace: true });
        }), Observable.subscribe(scheduler), Disposable.addTo(windowLocationStream));
        return windowLocationStream;
    }, false, false, false);
})();
