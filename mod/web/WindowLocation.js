/// <reference types="./WindowLocation.d.ts" />

import * as Obj from "../__internal__/Object.js";
import { Array_length, String } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../__internal__/mixins.js";
import * as Broadcaster from "../computations/Broadcaster.js";
import * as Computation from "../computations/Computation.js";
import * as Observable from "../computations/Observable.js";
import * as Streamable from "../computations/Streamable.js";
import * as WritableStore from "../computations/WritableStore.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, StoreLike_value, StreamableLike_stream, } from "../computations.js";
import { alwaysFalse, bindMethod, compose, identity, invoke, isFunction, isSome, newInstance, none, pipe, raiseIf, returns, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableContainerLike_add, DropOldestBackpressureStrategy, EventListenerLike_notify, } from "../utils.js";
import { WindowLocationLike_canGoBack, WindowLocationLike_goBack, WindowLocationLike_push, WindowLocationLike_replace, } from "../web.js";
import * as Element from "./Element.js";
const { history, location } = window;
const ObservableModule = Computation.makeModule({
    forEach: Observable.forEach,
    genPure: Observable.genPure,
    keep: Observable.keep,
    map: Observable.map,
    merge: Observable.merge,
});
const serializableWindowLocationPrototype = {
    toString() {
        const { path, query, fragment } = this;
        let uri = path[Array_length] === 0 ? "" : !path.startsWith("/") ? `/${path}` : path;
        uri = query[Array_length] > 0 ? `${uri}?${query}` : uri;
        uri = fragment[Array_length] > 0 ? `${uri}#${fragment}` : uri;
        const base = newInstance(URL, location.href);
        return String(newInstance(URL, base.origin + uri));
    },
};
const createSerializableWindowLocationURI = (uri) => uri.toString === serializableWindowLocationPrototype.toString
    ? uri
    : Obj.create(serializableWindowLocationPrototype, Obj.getOwnPropertyDescriptors(uri));
const getCurrentWindowLocationURI = () => {
    const { pathname: path, search: query, hash: fragment, } = newInstance(URL, location.href);
    return createSerializableWindowLocationURI({
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
const createSyncToHistoryStream = (f, scheduler, options) => Streamable.create(compose(Observable.throttle(100), Observable.forEach(({ counter, uri }) => {
    const serializableURI = createSerializableWindowLocationURI(uri);
    const { title } = serializableURI;
    document.title = title;
    f({ title, counter }, "", String(serializableURI));
})))[StreamableLike_stream](scheduler, options);
export const subscribe = /*@__PURE__*/ (() => {
    const WindowLocation_delegate = Symbol("WindowLocation_delegate");
    const createWindowLocation = mixInstanceFactory(include(DelegatingDisposableMixin), function WindowLocationStream(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        this[WindowLocation_delegate] = delegate;
        this[WindowLocationLike_canGoBack] = pipe(WritableStore.create(false), Disposable.addTo(this));
        pipe(delegate, Broadcaster.addEventHandler(({ counter }) => {
            this[WindowLocationLike_canGoBack][StoreLike_value] = counter > 0;
        }), Disposable.addTo(this));
        return this;
    }, props({
        [WindowLocation_delegate]: none,
        [WindowLocationLike_canGoBack]: none,
    }), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: true,
        get [StoreLike_value]() {
            unsafeCast(this);
            const state = this[WindowLocation_delegate][StoreLike_value];
            return state.uri;
        },
        [WindowLocationLike_push](stateOrUpdater) {
            this[WindowLocation_delegate][EventListenerLike_notify]((prevState) => {
                const uri = createSerializableWindowLocationURI(isFunction(stateOrUpdater)
                    ? stateOrUpdater(prevState.uri)
                    : stateOrUpdater);
                return { uri, replace: false, counter: prevState.counter + 1 };
            });
        },
        [WindowLocationLike_replace](stateOrUpdater) {
            this[WindowLocation_delegate][EventListenerLike_notify]((prevState) => {
                const uri = createSerializableWindowLocationURI(isFunction(stateOrUpdater)
                    ? stateOrUpdater(prevState.uri)
                    : stateOrUpdater);
                return { uri, replace: true, counter: prevState.counter };
            });
        },
        [WindowLocationLike_goBack]() {
            history.back();
        },
        [EventSourceLike_subscribe](eventListener) {
            pipe(this[WindowLocation_delegate], Broadcaster.map((x) => x.uri), invoke(EventSourceLike_subscribe, eventListener));
        },
    }));
    let currentWindowLocation = none;
    return (scheduler) => {
        raiseIf(isSome(currentWindowLocation), "Cannot stream more than once");
        const replaceState = createSyncToHistoryStream(bindMethod(history, "replaceState"), scheduler, { backpressureStrategy: DropOldestBackpressureStrategy, capacity: 1 });
        const pushState = createSyncToHistoryStream(bindMethod(history, "pushState"), scheduler, { backpressureStrategy: DropOldestBackpressureStrategy, capacity: 1 });
        const locationStream = pipe(Streamable.stateStore(() => ({
            replace: true,
            uri: getCurrentWindowLocationURI(),
            // Initialize the counter to -1 so that the initized start value
            // get pushed through the updater.
            counter: -1,
        }), { equality: areWindowLocationStatesEqual }), Streamable.syncState(state => 
        // Initialize the history state on page load
        pipe(window, Element.eventSource("popstate"), Broadcaster.map((e) => {
            const { counter, title } = e.state;
            const uri = createSerializableWindowLocationURI({
                ...getCurrentWindowLocationURI(),
                title,
            });
            return { counter, replace: true, uri };
        }), Observable.fromBroadcaster(), Computation.mergeWith(ObservableModule, Computation.ofValues(ObservableModule, {
            counter: 0,
            replace: true,
            uri: state.uri,
        })), Observable.map((returns))), (oldState, state) => {
            const locationChanged = !areURIsEqual(state.uri, oldState.uri);
            const titleChanged = oldState.uri.title !== state.uri.title;
            let { replace } = state;
            const push = !replace && locationChanged;
            replace = replace || (titleChanged && !locationChanged);
            return pipe(Computation.ofValues(ObservableModule, state), replace
                ? Observable.forEach(bindMethod(replaceState, EventListenerLike_notify))
                : push
                    ? Observable.forEach(bindMethod(pushState, EventListenerLike_notify))
                    : identity, Observable.keep(alwaysFalse));
        }), invoke(StreamableLike_stream, scheduler, {
            capacity: 1,
            backpressureStrategy: DropOldestBackpressureStrategy,
        }));
        currentWindowLocation = pipe(createWindowLocation(locationStream), Disposable.add(pushState), Disposable.add(replaceState));
        scheduler[DisposableContainerLike_add](currentWindowLocation);
        return currentWindowLocation;
    };
})();
