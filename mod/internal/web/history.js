import { pipe, compose } from "../../functions.js";
import { compute, concatWith, mergeWith, onNotify, throttle, } from "../../observable.js";
import { none } from "../../option.js";
import { toStateStore } from "../../stateStore.js";
import { createStreamable, map, mapReq } from "../../streamable.js";
import { fromEvent } from "./event.js";
const getCurrentLocation = (_) => window.location.href;
const pushHistoryState = (newLocation) => {
    const currentLocation = getCurrentLocation();
    if (currentLocation !== newLocation) {
        window.history.pushState(none, "", newLocation);
    }
};
const historyFunction = compose(throttle(15), onNotify(pushHistoryState), mergeWith(pipe(getCurrentLocation, compute(), concatWith(fromEvent(window, "popstate", getCurrentLocation)))));
export const emptyURI = {
    pathname: "",
    search: "",
    hash: "",
};
const toRelativeURI = (href) => {
    const uri = new URL(href);
    return {
        pathname: uri.pathname,
        search: uri.search,
        hash: uri.hash,
    };
};
const requestMapper = (stateUpdater) => (prevStateString) => {
    const prevStateURI = toRelativeURI(prevStateString);
    const newStateURI = stateUpdater(prevStateURI);
    if (newStateURI === prevStateURI) {
        return prevStateString;
    }
    else {
        const { pathname, search, hash } = newStateURI;
        const newURL = new URL(`${pathname}${search}${hash}`, prevStateString);
        return newURL.href;
    }
};
const _historyStateStore = pipe(createStreamable(historyFunction), toStateStore(), mapReq(requestMapper), map(toRelativeURI));
export const historyStateStore = _historyStateStore;
