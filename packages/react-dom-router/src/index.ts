import {
  RxReactRouter,
  RelativeURI,
  RoutableComponentProps,
} from "@reactive-js/react-router";
import { StateUpdater } from "@reactive-js/state-container";

import { AsyncIterator } from "@reactive-js/ix-core";
import {
  distinctUntilChanged as ixDistinctUntilChanged,
  map as ixMap,
  mapRequest as ixMapRequest,
} from "@reactive-js/ix-operators";

import { LocationState } from "@reactive-js/dom";
import { SchedulerLike } from "@reactive-js/scheduler";
import { normalPriority } from "@reactive-js/react-scheduler";

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

const createRelativeURILocation = (scheduler: SchedulerLike = normalPriority) =>
  AsyncIterator.pipe(
    LocationState.create(scheduler),
    ixMap(mapper),
    ixMapRequest(requestMapper),
    ixDistinctUntilChanged(),
  );

const createRelativeURIRouter = <TContext>(
  notFoundComponent: React.ComponentType<RoutableComponentProps>,
  routes: readonly [string, React.ComponentType<RoutableComponentProps>][],
  context: React.Context<TContext> | void,
  scheduler: SchedulerLike = normalPriority,
): React.ComponentType<TContext> =>
  RxReactRouter.create(
    () => createRelativeURILocation(scheduler),
    notFoundComponent,
    routes,
    context,
    scheduler,
  );

export const RxReactDomRouter = {
  create: createRelativeURIRouter,
};
