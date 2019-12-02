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
import { fromEvent } from "./event";

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

const chopLeadingChar = (str: string) =>
  str.length > 0 ? str.substring(1) : "";

const getCurrentLocation = (): Location => {
  const path = window.location.pathname;
  const query = chopLeadingChar(window.location.search);
  const fragment = chopLeadingChar(window.location.hash);
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
        let uriString = path;
        uriString = query.length > 0 ? `${uriString}?${query}` : uriString;
        uriString =
          fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
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
