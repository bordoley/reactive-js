/// <reference types="./WindowLocation.d.ts" />

import * as Obj from "../../__internal__/Object.js";
import { Array_length, String } from "../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { pick } from "../../computations.js";
import * as Observable from "../../concurrent/Observable.js";
import * as Streamable from "../../concurrent/Streamable.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, StreamableLike_stream, } from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import * as WritableStore from "../../events/WritableStore.js";
import { StoreLike_value } from "../../events.js";
import { bindMethod, compose, identity, invoke, isFunction, isSome, newInstance, none, pipe, raiseIf, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DropOldestBackpressureStrategy, QueueableLike_enqueue, } from "../../utils.js";
import { WindowLocationLike_canGoBack, WindowLocationLike_goBack, WindowLocationLike_push, WindowLocationLike_replace, } from "../web.js";
import * as Element from "./Element.js";
const { history, location } = window;
const windowLocationPrototype = {
    toString() {
        const { path, query, fragment } = this;
        let uri = path[Array_length] === 0 ? "" : !path.startsWith("/") ? `/${path}` : path;
        uri = query[Array_length] > 0 ? `${uri}?${query}` : uri;
        uri = fragment[Array_length] > 0 ? `${uri}#${fragment}` : uri;
        const base = newInstance(URL, location.href);
        return String(newInstance(URL, base.origin + uri));
    },
};
const createWindowLocationURIWithPrototype = (uri) => uri.toString === windowLocationPrototype.toString
    ? uri
    : Obj.create(windowLocationPrototype, Obj.getOwnPropertyDescriptors(uri));
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
const createSyncToHistoryStream = (f, scheduler, options) => Streamable.create(compose(Observable.throttle(100), Observable.forEach(({ counter, uri }) => {
    const { title } = uri;
    document.title = title;
    f({ title, counter }, "", String(uri));
})))[StreamableLike_stream](scheduler, options);
export const subscribe = /*@__PURE__*/ (() => {
    const WindowLocation_delegate = Symbol("WindowLocation_delegate");
    const createWindowLocationObservable = mixInstanceFactory(include(DelegatingDisposableMixin()), function WindowLocationStream(instance, delegate, scheduler) {
        init(DelegatingDisposableMixin(), instance, delegate);
        instance[WindowLocation_delegate] = delegate;
        instance[WindowLocationLike_canGoBack] = pipe(WritableStore.create(false), Disposable.addTo(instance));
        pipe(delegate, Observable.forEach(({ counter }) => {
            instance[WindowLocationLike_canGoBack][StoreLike_value] = counter > 0;
        }), Observable.subscribe(scheduler), Disposable.addTo(instance));
        return instance;
    }, props({
        [WindowLocation_delegate]: none,
        [WindowLocationLike_canGoBack]: none,
    }), {
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isMulticasted]: true,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isPure]: true,
        [WindowLocationLike_push](stateOrUpdater) {
            this[WindowLocation_delegate][QueueableLike_enqueue]((prevState) => {
                const uri = createWindowLocationURIWithPrototype(isFunction(stateOrUpdater)
                    ? stateOrUpdater(prevState.uri)
                    : stateOrUpdater);
                return { uri, replace: false, counter: prevState.counter + 1 };
            });
        },
        [WindowLocationLike_replace](stateOrUpdater) {
            this[WindowLocation_delegate][QueueableLike_enqueue]((prevState) => {
                const uri = createWindowLocationURIWithPrototype(isFunction(stateOrUpdater)
                    ? stateOrUpdater(prevState.uri)
                    : stateOrUpdater);
                return { uri, replace: true, counter: prevState.counter };
            });
        },
        [WindowLocationLike_goBack]() {
            history.back();
        },
        [ObservableLike_observe](observer) {
            pipe(this[WindowLocation_delegate], pick(Observable.map)("uri"), invoke(ObservableLike_observe, observer));
        },
    });
    let currentWindowLocationObservable = none;
    return (scheduler) => {
        raiseIf(isSome(currentWindowLocationObservable), "Cannot stream more than once");
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
        pipe(window, Element.eventSource("popstate"), EventSource.map((e) => {
            const { counter, title } = e.state;
            const uri = createWindowLocationURIWithPrototype({
                ...getCurrentWindowLocationURI(),
                title,
            });
            return { counter, replace: true, uri };
        }), Observable.fromEventSource(), Observable.mergeWith(pipe({
            counter: 0,
            replace: true,
            uri: state.uri,
        }, Observable.fromValue())), Observable.map(returns)), (oldState, state) => {
            const locationChanged = !areURIsEqual(state.uri, oldState.uri);
            const titleChanged = oldState.uri.title !== state.uri.title;
            let { replace } = state;
            const push = !replace && locationChanged;
            replace = replace || (titleChanged && !locationChanged);
            return pipe(state, Observable.fromValue(), replace
                ? Observable.enqueue(replaceState)
                : push
                    ? Observable.enqueue(pushState)
                    : identity, Observable.ignoreElements());
        }), invoke(StreamableLike_stream, scheduler, {
            replay: 1,
            capacity: 1,
            backpressureStrategy: DropOldestBackpressureStrategy,
        }));
        currentWindowLocationObservable = pipe(createWindowLocationObservable(locationStream, scheduler), Disposable.add(pushState), Disposable.add(replaceState));
        return currentWindowLocationObservable;
    };
})();
