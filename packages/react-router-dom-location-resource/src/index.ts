import { fromEvent } from "@reactive-js/dom";
import {
  createStateStore,
  lift,
  pipe as pipeIter,
  share,
} from "@reactive-js/ix-async-iterator-resource";
import {
  equals as relativeURIEquals,
  RelativeURI,
} from "@reactive-js/react-router-relative-uri";
import { normalPriority } from "@reactive-js/react-scheduler";
import {
  ignoreElements,
  merge,
  ObservableOperator,
  onNext,
  pipe,
} from "@reactive-js/rx-observable";
import { SchedulerLike } from "@reactive-js/scheduler";

const getCurrentLocation = (): RelativeURI => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return { path, query, fragment };
};

const createOnPopstateUpdateURI = (setURI: (state: RelativeURI) => void) =>
  pipe(
    fromEvent(window, "popstate", _ => getCurrentLocation()),
    onNext(setURI),
    ignoreElements(),
  );

const onStateChangeUpdateHistory: ObservableOperator<
  RelativeURI,
  RelativeURI
> = obs =>
  pipe(
    obs,
    onNext((uri: RelativeURI) => {
      if (!relativeURIEquals(uri, getCurrentLocation())) {
        const { path, query, fragment } = uri;
        const uriString = path + query + fragment;
        window.history.pushState(undefined, "", uriString);
      }
    }),
  );

const operator = (
  setURI: (state: RelativeURI) => void,
): ObservableOperator<RelativeURI, RelativeURI> => obs =>
  pipe(
    merge(createOnPopstateUpdateURI(setURI), obs),
    onStateChangeUpdateHistory,
  );

export const create = (scheduler: SchedulerLike = normalPriority) => {
  const stateStore = createStateStore(
    getCurrentLocation(),
    scheduler,
    relativeURIEquals,
  );

  const setURI = (uri: RelativeURI) => stateStore.dispatch(_ => uri);
  return pipeIter(stateStore, lift(operator(setURI)), share(scheduler));
};
