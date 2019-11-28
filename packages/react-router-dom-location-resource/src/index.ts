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
import { SchedulerOptions } from "@reactive-js/scheduler";

const getCurrentLocation = (): RelativeURI => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return { path, query, fragment };
};

const operator = (
  setURI: (state: RelativeURI) => void,
  options?: SchedulerOptions,
) => (obs: ObservableLike<RelativeURI>): ObservableLike<RelativeURI> => {
  const onPopstateUpdateURIObs = pipe(
    fromEvent(window, "popstate", _ => getCurrentLocation(), options),
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
    shareReplayLast(scheduler, options),
  );
};

export const create = (options?: SchedulerOptions) => {
  const stateStore = createStateStore(
    getCurrentLocation(),
    relativeURIEquals,
    scheduler,
    options,
  );

  const setURI = (uri: RelativeURI) => stateStore.dispatch(_ => uri);

  return asyncIteratorResourcePipe(stateStore, lift(operator(setURI, options)));
};
