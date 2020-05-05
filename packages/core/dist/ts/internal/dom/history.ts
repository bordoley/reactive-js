import {
  StreamableLike,
  createStreamable,
} from "../../streamable.ts";
import {
  compute,
  merge,
  ObservableLike,
  onNotify,
  throttle,
} from "../../observable.ts";
import { none } from "../../option.ts";
import { pipe } from "../../functions.ts";
import { fromEvent } from "./event.ts";
import { distinctUntilChanged } from "../../observable.ts";

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

const _history: StreamableLike<string, string> = createStreamable(
  historyOperator,
);

export const history: StreamableLike<string, string> = _history;
