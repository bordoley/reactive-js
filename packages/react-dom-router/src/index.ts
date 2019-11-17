import {
  Router as ReactRouter,
  RelativeURI,
  RouterProps,
} from "@reactive-js/react-router";
import { StateUpdater } from "@reactive-js/state-container";

import { AsyncIterator } from "@reactive-js/ix-core";
import { distinctUntilChanged, map } from "@reactive-js/rx-operators";

import { LocationState } from "./location";
import { scheduler } from "@reactive-js/react-scheduler";

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

const createRelativeURILocation = (
) => {
  const lifted = AsyncIterator.lift(
    LocationState.create(scheduler),
    map(mapper),
    distinctUntilChanged(),
  );

  return AsyncIterator.mapRequest(lifted, requestMapper);
};

const create = (
): React.ComponentType<RouterProps> =>
  ReactRouter.create(() => createRelativeURILocation());

export const Router = {
  create,
};
