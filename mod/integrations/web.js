/// <reference types="./web.d.ts" />

import * as Object from "../__internal__/Object.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack, WindowLocationStreamLike_replace, } from "../__internal__/symbols.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import { bindMethod, compose, error, isFunction, isSome, newInstance, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../streaming.js";
import * as Streamable from "../streaming/Streamable.js";
import { DisposableLike_dispose, QueueableLike_capacity, QueueableLike_enqueue, } from "../util.js";
import * as Disposable from "../util/Disposable.js";
import Disposable_delegatingMixin from "../util/Disposable/__internal__/Disposable.delegatingMixin.js";
export { WindowLocationStreamLike_goBack, WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_replace, };
const errorEvent = "error";
const reservedEvents = [errorEvent, "open"];
export const createEventSource = (url, options = {}) => {
    var _a;
    const events = pipe((_a = options.events) !== null && _a !== void 0 ? _a : ["message"], ReadonlyArray.keep(x => !reservedEvents.includes(x)));
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
            observer[QueueableLike_enqueue]({
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
        observer[QueueableLike_enqueue](result);
    };
    target.addEventListener(eventName, listener, { passive: true });
});
export const windowLocation = /*@__PURE__*/ (() => {
    const { history, location } = window;
    const windowLocationPrototype = {
        toString() {
            const { path, query, fragment } = this;
            let uri = path.length === 0 ? "" : !path.startsWith("/") ? `/${path}` : path;
            uri = query.length > 0 ? `${uri}?${query}` : uri;
            uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;
            const base = newInstance(URL, location.href);
            return String(newInstance(URL, base.origin + uri));
        },
    };
    const createWindowLocationURIWithPrototype = (uri) => uri.toString === windowLocationPrototype.toString
        ? uri
        : Object.create(windowLocationPrototype, Object.getOwnPropertyDescriptors(uri));
    const getCurrentWindowLocationURI = () => {
        const { pathname: path, search: query, hash: fragment, } = newInstance(URL, location.href);
        return createWindowLocationURIWithPrototype({
            path,
            query: query.slice(1),
            fragment: fragment.slice(1),
            title: document.title,
        });
    };
    const areURIsEqual = (a, b) => a.path === b.path && a.query === b.query && a.fragment === b.fragment;
    const areWindowLocationStatesEqual = ({ uri: a, counter: counterA }, { uri: b, counter: counterB }) => 
    // Intentionally ignore the replace flag.
    (a === b || (a.title === b.title && areURIsEqual(a, b))) &&
        counterA === counterB;
    const createWindowLocationStream = createInstanceFactory(mix(include(Disposable_delegatingMixin()), function WindowLocationStream(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_capacity];
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        get [WindowLocationStreamLike_canGoBack]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], Observable.map(({ counter }) => counter > 0));
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_complete]() {
            this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
        [QueueableLike_enqueue](stateOrUpdater) {
            return this[DelegatingLike_delegate][QueueableLike_enqueue](prevState => {
                const uri = createWindowLocationURIWithPrototype(isFunction(stateOrUpdater)
                    ? stateOrUpdater(prevState.uri)
                    : stateOrUpdater);
                return { uri, replace: false, counter: prevState.counter + 1 };
            });
        },
        [WindowLocationStreamLike_replace](stateOrUpdater) {
            return this[DelegatingLike_delegate][QueueableLike_enqueue](prevState => {
                const uri = createWindowLocationURIWithPrototype(isFunction(stateOrUpdater)
                    ? stateOrUpdater(prevState.uri)
                    : stateOrUpdater);
                return { uri, replace: true, counter: prevState.counter };
            });
        },
        [WindowLocationStreamLike_goBack]() {
            history.back();
        },
        [ObservableLike_observe](observer) {
            pipe(this[DelegatingLike_delegate], Observable.pick("uri"), Observable.observeWith(observer));
        },
    }));
    let currentWindowLocationStream = none;
    const createSyncToHistoryStream = (f, scheduler, options) => Streamable.create(compose(Observable.throttle(100), Observable.forEach(({ counter, uri }) => {
        const { title } = uri;
        document.title = title;
        f({ title, counter }, "", String(uri));
    })))[StreamableLike_stream](scheduler, options);
    const stream = (scheduler, options) => {
        if (isSome(currentWindowLocationStream)) {
            raiseWithDebugMessage("Cannot stream more than once");
        }
        const { capacity } = options !== null && options !== void 0 ? options : {};
        const replaceState = createSyncToHistoryStream(bindMethod(history, "replaceState"), scheduler, { capacity });
        const pushState = createSyncToHistoryStream(bindMethod(history, "pushState"), scheduler, { capacity });
        currentWindowLocationStream = pipe(Streamable.createWriteThroughCache(() => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
            // Initialize the counter to -1 so that the initized start value
            // get pushed through the updater.
            counter: -1,
        }), state => 
        // Initialize the history state on page load
        pipe(window, addEventListener("popstate", (e) => {
            const { counter, title } = e.state;
            const uri = createWindowLocationURIWithPrototype({
                ...getCurrentWindowLocationURI(),
                title,
            });
            return { counter, replace: true, uri };
        }), Observable.startWith({
            counter: 0,
            replace: true,
            uri: state.uri,
        }), Observable.map(returns)), (oldState, state) => {
            const locationChanged = !areURIsEqual(state.uri, oldState.uri);
            const titleChanged = oldState.uri.title !== state.uri.title;
            let { replace } = state;
            const push = !replace && locationChanged;
            replace = replace || (titleChanged && !locationChanged);
            return pipe(state, Observable.fromOptional(), Observable.enqueue(state => replace
                ? replaceState[QueueableLike_enqueue](state)
                : push
                    ? pushState[QueueableLike_enqueue](state)
                    : false), Observable.ignoreElements());
        }, { equality: areWindowLocationStatesEqual })[StreamableLike_stream](scheduler, options), createWindowLocationStream, Disposable.add(pushState), Disposable.add(replaceState));
        return currentWindowLocationStream;
    };
    return {
        [StreamableLike_isEnumerable]: false,
        [StreamableLike_isInteractive]: false,
        [StreamableLike_isRunnable]: false,
        [StreamableLike_stream]: stream,
    };
})();
