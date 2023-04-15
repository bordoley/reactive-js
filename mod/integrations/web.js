/// <reference types="./web.d.ts" />

import * as Object from "../__internal__/Object.js";
import { MAX_VALUE, MIN_VALUE } from "../__internal__/constants.js";
import { clamp } from "../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { __WindowLocationStreamLike_canGoBack as WindowLocationStreamLike_canGoBack, __WindowLocationStreamLike_goBack as WindowLocationStreamLike_goBack, __WindowLocationStreamLike_replace as WindowLocationStreamLike_replace, } from "../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../__internal__/util.js";
import { bindMethod, compose, error, invoke, isFunction, isSome, newInstance, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../functions.js";
import * as ReadonlyArray from "../keyed-containers/ReadonlyArray.js";
import { ObservableLike_observe, ReplayableLike_buffer, } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../streaming.js";
import * as Stream from "../streaming/Stream.js";
import Stream_delegatingMixin from "../streaming/Stream/__internal__/Stream.delegatingMixin.js";
import * as Streamable from "../streaming/Streamable.js";
import { BufferLike_capacity, CollectionLike_count, DisposableLike_dispose, EventListenerLike_notify, KeyedCollectionLike_get, QueueableLike_enqueue, } from "../util.js";
import Delegating_mixin from "../util/Delegating/__internal__/Delegating.mixin.js";
import * as Disposable from "../util/Disposable.js";
import * as EventListener from "../util/EventListener.js";
export { WindowLocationStreamLike_goBack, WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_replace, };
const errorEvent = "error";
const reservedEvents = [errorEvent, "open"];
export const createEventSource = (url, options = {}) => {
    const events = pipe(options.events ?? ["message"], ReadonlyArray.keep(x => !reservedEvents.includes(x)));
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
            observer[QueueableLike_enqueue]({
                id: ev.lastEventId ?? "",
                type: ev.type ?? "",
                data: ev.data ?? "",
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
export const addEventListener = ((eventName, eventListener) => target => {
    pipe(eventListener, Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        eventListener[EventListenerLike_notify](event);
    };
    target.addEventListener(eventName, listener, {
        passive: true,
    });
    return target;
});
export const observeEvent = ((eventName, selector) => target => Observable.create(observer => {
    pipe(observer, Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, listener);
    }));
    const listener = (event) => {
        const result = selector(event);
        observer[QueueableLike_enqueue](result);
    };
    target.addEventListener(eventName, listener, {
        passive: true,
    });
}));
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
    class WindowLocationReplayBuffer {
        d;
        constructor(d) {
            this.d = d;
        }
        get [BufferLike_capacity]() {
            return this.d[BufferLike_capacity];
        }
        get [CollectionLike_count]() {
            return this.d[CollectionLike_count];
        }
        [KeyedCollectionLike_get](index) {
            return this.d[KeyedCollectionLike_get](index).uri;
        }
    }
    const createWindowLocationStream = createInstanceFactory(mix(include(Stream_delegatingMixin(), Delegating_mixin()), function WindowLocationStream(instance, delegate) {
        init(Stream_delegatingMixin(), instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [ReplayableLike_buffer]() {
            unsafeCast(this);
            return newInstance(WindowLocationReplayBuffer, this[DelegatingLike_delegate][ReplayableLike_buffer]);
        },
        get [WindowLocationStreamLike_canGoBack]() {
            unsafeCast(this);
            return pipe(this[DelegatingLike_delegate], Observable.map(({ counter }) => counter > 0));
        },
        [QueueableLike_enqueue](stateOrUpdater) {
            return this[DelegatingLike_delegate][QueueableLike_enqueue]((prevState) => {
                const uri = createWindowLocationURIWithPrototype(isFunction(stateOrUpdater)
                    ? stateOrUpdater(prevState.uri)
                    : stateOrUpdater);
                return { uri, replace: false, counter: prevState.counter + 1 };
            });
        },
        [WindowLocationStreamLike_replace](stateOrUpdater) {
            return this[DelegatingLike_delegate][QueueableLike_enqueue]((prevState) => {
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
            pipe(this[DelegatingLike_delegate], Observable.pick("uri"), invoke(ObservableLike_observe, observer));
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
        const replaceState = createSyncToHistoryStream(bindMethod(history, "replaceState"), scheduler, { backpressureStrategy: "drop-oldest", capacity: 1 });
        const pushState = createSyncToHistoryStream(bindMethod(history, "pushState"), scheduler, { backpressureStrategy: "drop-oldest", capacity: 1 });
        currentWindowLocationStream = pipe(Streamable.createStateStore(() => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
            // Initialize the counter to -1 so that the initized start value
            // get pushed through the updater.
            counter: -1,
        }), { equality: areWindowLocationStatesEqual }), invoke(StreamableLike_stream, scheduler, {
            replay: options?.replay ?? 1,
            capacity: options?.capacity ?? 1,
            backpressureStrategy: options?.backpressureStrategy ?? "drop-oldest",
        }), Stream.syncState(state => 
        // Initialize the history state on page load
        pipe(window, observeEvent("popstate", (e) => {
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
        }), createWindowLocationStream, Disposable.add(pushState), Disposable.add(replaceState));
        return currentWindowLocationStream;
    };
    return {
        [StreamableLike_isEnumerable]: false,
        [StreamableLike_isInteractive]: false,
        [StreamableLike_isRunnable]: false,
        [StreamableLike_stream]: stream,
    };
})();
const calcProgress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);
export const addScrollListener = (listener) => (element) => {
    let prevTime = MIN_VALUE;
    let xPrev = 0;
    let yPrev = 0;
    let xVelocityPrev = 0;
    let yVelocityPrev = 0;
    const eventListener = pipe((_) => {
        // FIXME: Reset the prev metrics/time on the resize event
        // FIXME: Should define this in a common function
        const now = performance.now();
        const dt = clamp(0, now - prevTime, MAX_VALUE);
        // FIXME: Nearly every production implementation seems to reuse an
        // event object to avoid memory allocations.
        const xCurrent = element.scrollLeft;
        const xScrollLength = element.scrollWidth - element.clientWidth;
        const xVelocity = (xCurrent - xPrev) / dt;
        const xAcceleration = dt > 0 ? (xVelocity - xVelocityPrev) / dt : 0;
        const yCurrent = element.scrollTop;
        const yScrollLength = element.scrollHeight - element.clientHeight;
        const yVelocity = (yCurrent - yPrev) / dt;
        const yAcceleration = dt > 0 ? (yVelocity - yVelocityPrev) / dt : 0;
        const x = {
            current: xCurrent,
            scrollLength: xScrollLength,
            progress: calcProgress(0, xScrollLength, xCurrent),
            velocity: xVelocity,
            acceleration: xAcceleration,
        };
        const y = {
            current: yCurrent,
            scrollLength: yScrollLength,
            progress: calcProgress(0, yScrollLength, yCurrent),
            velocity: yVelocity,
            acceleration: yAcceleration,
        };
        prevTime = now;
        xPrev = xCurrent;
        xVelocityPrev = xVelocity;
        yPrev = yCurrent;
        yVelocityPrev = yVelocity;
        listener[EventListenerLike_notify]({
            event: "scroll",
            value: { x, y },
        });
    }, EventListener.create, Disposable.bindTo(listener));
    pipe(element, addEventListener("scroll", eventListener), addEventListener("resize", eventListener));
    return element;
};
