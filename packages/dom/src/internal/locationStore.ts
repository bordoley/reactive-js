import { fromEvent } from "./event";
import {
  createStateStore,
  lift,
  pipe as pipeIter,
  share,
} from "@reactive-js/ix-async-iterator-resource";
import {
  ignoreElements,
  merge,
  ObservableOperator,
  onNext,
  pipe,
} from "@reactive-js/rx-observable";
import { SchedulerLike } from "@reactive-js/scheduler";

export interface Location {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

const empty: Location = {
  path: "",
  query: "",
  fragment: "",
};

const locationEquals = (a: Location, b: Location): boolean =>
  a === b ||
  (a.path === b.path && a.query === b.query && a.fragment === b.fragment);

const getCurrentLocation = (): Location => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return { path, query, fragment };
};

const createOnPopstateUpdateURI = (setURI: (state: Location) => void) =>
  pipe(
    fromEvent(window, "popstate", _ => getCurrentLocation()),
    onNext(setURI),
    ignoreElements(),
  );

const onStateChangeUpdateHistory: ObservableOperator<
Location,
Location
> = obs =>
  pipe(
    obs,
    onNext((uri: Location) => {
      if (!locationEquals(uri, getCurrentLocation())) {
        const { path, query, fragment } = uri;
        const uriString = path + query + fragment;
        window.history.pushState(undefined, "", uriString);
      }
    }),
  );

const operator = (
  setURI: (state: Location) => void,
): ObservableOperator<Location, Location> => obs =>
  pipe(
    merge(createOnPopstateUpdateURI(setURI), obs),
    onStateChangeUpdateHistory,
  );

export const createLocationStore = (scheduler: SchedulerLike) => {
  const stateStore = createStateStore(
    getCurrentLocation(),
    scheduler,
    locationEquals,
  );

  const setURI = (uri: Location) => stateStore.dispatch(_ => uri);
  return pipeIter(stateStore, lift(operator(setURI)), share(scheduler));
};