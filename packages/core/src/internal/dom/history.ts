import {
  createStreamable,
  map,
  mapReq,
} from "../../streamable";
import {
  compute,
  distinctUntilChanged,
  merge,
  ObservableLike,
  onNotify,
  throttle,
} from "../../observable";
import { none } from "../../option";
import { pipe } from "../../functions";
import { fromEvent } from "./event";
import { StateStoreLike, toStateStore, StateUpdater } from "../../stateStore";

const getCurrentLocation = (_?: unknown): string => 
  window.location.href;

const pushHistoryState = (newLocation: string) => {
  const currentLocation = getCurrentLocation();
  if (currentLocation !== newLocation) {
    window.history.pushState(none, "", newLocation);
  }
};

const historyOperator = (obs: ObservableLike<string>) => pipe(
  merge(
    compute(getCurrentLocation),
    pipe(obs, throttle(15), onNotify(pushHistoryState)),
    fromEvent(window, "popstate", getCurrentLocation),
  ),
  distinctUntilChanged(),
);

const _historyStateStore: StateStoreLike<string> = pipe(
  createStreamable(historyOperator),
  toStateStore(() => ""),
);

export const historyStateStore: StateStoreLike<string> = _historyStateStore;

const parseState = (str: string) =>
  str.length > 1 ? decodeURIComponent(str.substring(1)) : "";

const getSearchState = (
  state: string,
): string => {
  const url = new URL(state);
  return parseState(url.search);
};

const searchStateRequestMapper = (
  stateUpdater: StateUpdater<string>
): StateUpdater<string> => (
  prevStateString: string,
) => {
  const prevStateURL = new URL(prevStateString);
  const prevState = parseState(prevStateURL.search);
  const newState = stateUpdater(prevState);

  if (newState === prevState) {
    return prevStateString;
  } else {
    const newURL = new URL("", prevStateURL);
    newURL.search = newState.length > 0 ? "?" + encodeURIComponent(newState) : "";
    return newURL.href;
  }
}

export const historySearchStateStore: StateStoreLike<string> = pipe(
  historyStateStore,
  mapReq(searchStateRequestMapper),
  map(getSearchState)
);

const getHashState = (
  state: string,
): string => {
  const url = new URL(state);
  return parseState(url.hash);
};

const hashStateRequestMapper = (
  stateUpdater: StateUpdater<string>
): StateUpdater<string> => (
  prevStateString: string,
) => {
  const prevStateURL = new URL(prevStateString);
  const prevState = parseState(prevStateURL.hash);
  const newState = stateUpdater(prevState);

  if (newState === prevState) {
    return prevStateString;
  } else {
    const newURL = new URL("", prevStateURL);
    newURL.hash = newState.length > 0 ? "#" + encodeURIComponent(newState) : "";
    return newURL.href;
  }
}

export const historyHashStateStore: StateStoreLike<string> = pipe(
  historyStateStore,
  mapReq(hashStateRequestMapper),
  map(getHashState)
);