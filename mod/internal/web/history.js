import { pipe, compose } from "../../functions.js";
import { compute, concatWith, mergeWith, onNotify, throttle, } from "../../observable.js";
import { none } from "../../option.js";
import { toStateStore } from "../../stateStore.js";
import { createStreamable, map, mapReq } from "../../streamable.js";
import { fromEvent } from "./event.js";
import { fromHref, toHref } from "../../relativeURI.js";
const getCurrentLocation = (_) => window.location.href;
const pushHistoryState = (newLocation) => {
    const currentLocation = getCurrentLocation();
    if (currentLocation !== newLocation) {
        window.history.pushState(none, "", newLocation);
    }
};
const historyFunction = compose(throttle(15), onNotify(pushHistoryState), mergeWith(pipe(getCurrentLocation, compute(), concatWith(fromEvent(window, "popstate", getCurrentLocation)))));
const requestMapper = (stateUpdater) => (prevStateString) => {
    const prevStateURI = fromHref(prevStateString);
    const newStateURI = stateUpdater(prevStateURI);
    return newStateURI === prevStateURI
        ? prevStateString
        : toHref(newStateURI, prevStateString);
};
const _historyStateStore = pipe(createStreamable(historyFunction), toStateStore(), mapReq(requestMapper), map(fromHref));
export const historyStateStore = _historyStateStore;
