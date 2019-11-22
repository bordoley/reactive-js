import {
  RelativeURI,
  Router as ReactRouter,
  RouterProps,
} from "@reactive-js/react-router";
import { StateUpdater } from "@reactive-js/state-container";

import { AsyncIterator } from "@reactive-js/ix-core";
import { distinctUntilChanged, map } from "@reactive-js/rx-operators";

import { scheduler } from "@reactive-js/react-scheduler";
import { LocationState } from "./location";

const mapper = (v: string): RelativeURI => {
  const parsedAccURL = new URL(v);
  return {
    path: parsedAccURL.pathname,
    query: parsedAccURL.search,
    fragment: parsedAccURL.hash,
  };
};

const reducer = (
  acc: string,
  stateUpdater: StateUpdater<RelativeURI>,
): string => {
  const parsedAccURL = new URL(acc);
  const accRelativeURI = {
    path: parsedAccURL.pathname,
    query: parsedAccURL.search,
    fragment: parsedAccURL.hash,
  };

  const { path, query, fragment } = stateUpdater(accRelativeURI);
  return path + query + fragment;
};

const requestMapper = (updater: StateUpdater<RelativeURI>) => (acc: string) =>
  reducer(acc, updater);

const createRelativeURILocation = (priority?: number) => {
  const lifted = AsyncIterator.lift(
    LocationState.create(scheduler, priority),
    map(mapper),
    distinctUntilChanged(),
  );

  return AsyncIterator.mapRequest(lifted, requestMapper);
};

const create = (priority?: number): React.ComponentType<RouterProps> =>
  ReactRouter.create(() => createRelativeURILocation(priority));

export const Router = {
  create,
};
