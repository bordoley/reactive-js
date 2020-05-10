import { pipe } from "../../functions.js";
import { compute, merge, onNotify, throttle, concat, } from "../../observable.js";
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
const historyOperator = (obs) => pipe(merge(pipe(obs, throttle(15), onNotify(pushHistoryState)), fromEvent(window, "popstate", getCurrentLocation)), x => concat(compute()(getCurrentLocation), x));
const _historyStateStore = pipe(createStreamable(historyOperator), toStateStore());
export const historyStateStore = _historyStateStore;
const parseQueryState = (searchParams) => {
    const retval = {};
    searchParams.forEach((v, k) => {
        retval[k] = v;
    });
    return retval;
};
const getSearchState = (state) => {
    const url = new URL(state);
    return parseQueryState(url.searchParams);
};
const searchStateRequestMapper = (stateUpdater) => (prevStateString) => {
    const prevStateURL = new URL(prevStateString);
    const prevState = parseQueryState(prevStateURL.searchParams);
    const newState = stateUpdater(prevState);
    if (newState === prevState) {
        return prevStateString;
    }
    else {
        const newURL = new URL("", prevStateURL);
        const searchParams = new URLSearchParams(newState);
        const searchParamsStr = searchParams.toString();
        newURL.search = searchParamsStr.length > 0 ? `?${searchParamsStr}` : "";
        return newURL.href;
    }
};
export const historySearchStateStore = pipe(historyStateStore, mapReq(searchStateRequestMapper), map(getSearchState));
const parseHashState = (str) => str.length > 1 ? decodeURIComponent(str.substring(1)) : "";
const getHashState = (state) => {
    const url = new URL(state);
    return parseHashState(url.hash);
};
const hashStateRequestMapper = (stateUpdater) => (prevStateString) => {
    const prevStateURL = new URL(prevStateString);
    const prevState = parseHashState(prevStateURL.hash);
    const newState = stateUpdater(prevState);
    if (newState === prevState) {
        return prevStateString;
    }
    else {
        const newURL = new URL("", prevStateURL);
        newURL.hash = newState.length > 0 ? "#" + encodeURIComponent(newState) : "";
        return newURL.href;
    }
};
export const historyHashStateStore = pipe(historyStateStore, mapReq(hashStateRequestMapper), map(getHashState));
