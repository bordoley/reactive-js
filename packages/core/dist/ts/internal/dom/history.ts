import {
  createStreamable,
  map,
  mapReq,
} from "../../streamable.ts";
import {
  compute,
  distinctUntilChanged,
  merge,
  ObservableLike,
  onNotify,
  throttle,
} from "../../observable.ts";
import { none } from "../../option.ts";
import { pipe } from "../../functions.ts";
import { fromEvent } from "./event.ts";
import { StateStoreLike, toStateStore, StateUpdater } from "../../stateStore.ts";

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

const _history: StateStoreLike<string> = pipe(
  createStreamable(historyOperator),
  toStateStore(() => ""),
);

export const history: StateStoreLike<string> = _history;

const getSearchState = (
  state: string,
): string => {
  const url = new URL(state);
  return url.search;
};

const searchStateRequestMapper = (
  stateUpdater: StateUpdater<string>
): StateUpdater<string> => (
  prevStateString: string,
) => {
  const prevStateURL = new URL(prevStateString);
  const prevState = prevStateURL.search;
  const newState = stateUpdater(prevState);

  if (newState === prevState) {
    return prevStateString;
  } else {
    const newURL = new URL("", prevStateURL);
    newURL.search = newState;
    return newURL.href;
  }
}

export const historySearchStateStore: StateStoreLike<string> = pipe(
  history,
  mapReq(searchStateRequestMapper),
  map(getSearchState)
);


const getHashState = (
  state: string,
): string => {
  const url = new URL(state);
  return url.hash;
};

const hashStateRequestMapper = (
  stateUpdater: StateUpdater<string>
): StateUpdater<string> => (
  prevStateString: string,
) => {
  const prevStateURL = new URL(prevStateString);
  const prevState = prevStateURL.hash;
  const newState = stateUpdater(prevState);

  if (newState === prevState) {
    return prevStateString;
  } else {
    const newURL = new URL("", prevStateURL);
    newURL.hash = newState;
    return newURL.href;
  }
}

export const historyHashStateStore: StateStoreLike<string> = pipe(
  history,
  mapReq(hashStateRequestMapper),
  map(getHashState)
);