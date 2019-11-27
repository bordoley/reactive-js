import { fromEvent } from "@reactive-js/dom";
import {
  createStateStore,
  lift,
  pipe as asyncIteratorResourcePipe,
} from "@reactive-js/ix-async-iterator-resource";
import {
  equals as relativeURIEquals,
  RelativeURI,
} from "@reactive-js/react-router-relative-uri";
import { scheduler } from "@reactive-js/react-scheduler";
import { ObservableLike, pipe } from "@reactive-js/rx-observable";
import {
  ignoreElements,
  keep,
  merge,
  onNext,
  shareReplayLast,
} from "@reactive-js/rx-observables";

const getCurrentLocation = (): RelativeURI => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return { path, query, fragment };
};

const operator = (setURI: (state: RelativeURI) => void, priority?: number) => (
  obs: ObservableLike<RelativeURI>,
): ObservableLike<RelativeURI> => {
  const onPopstateUpdateURIObs = pipe(
    fromEvent(window, "popstate", _ => getCurrentLocation(), priority),
    onNext(setURI),
    ignoreElements(),
  );

  const onStateChangeUpdateHistoryObs = pipe(
    obs,
    keep(location => !relativeURIEquals(location, getCurrentLocation())),
    onNext(({ path, query, fragment }: RelativeURI) => {
      const uri = path + query + fragment;
      window.history.pushState(undefined, "", uri);
    }),
    ignoreElements(),
  );

  return pipe(
    merge(onPopstateUpdateURIObs, onStateChangeUpdateHistoryObs, obs),
    shareReplayLast(scheduler, priority),
  );
};

export const create = (priority?: number) => {
  const stateStore = createStateStore(
    getCurrentLocation(),
    relativeURIEquals,
    scheduler,
    priority,
  );

  const setURI = (uri: RelativeURI) => stateStore.dispatch(_ => uri);

  return asyncIteratorResourcePipe(
    stateStore,
    lift(operator(setURI, priority)),
  );
};
