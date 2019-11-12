import {
  Router as RxReactRouter,
  RelativeURI,
  RoutableComponentProps,
} from "@rx-min/rx-react-router";
import { StateUpdater } from "@rx-min/rx-observable-state";

import { pipe } from "@rx-min/ix-core";
import {
  distinctUntilChanged as ixDistinctUntilChanged,
  map as ixMap,
  mapRequest as ixMapRequest,
} from "@rx-min/ix-operators";

import { LocationState } from "@rx-min/rx-dom";
import { SchedulerLike } from "@rx-min/rx-core";
import { normalPriority } from "@rx-min/rx-scheduler";

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
  pipe(
    LocationState.create(scheduler),
    ixMap(mapper),
    ixMapRequest(requestMapper),
    ixDistinctUntilChanged(),
  );

const createRelativeURIRouter = <TContext>(
  notFoundComponent: React.ComponentType<RoutableComponentProps>,
  routes: readonly [string, React.ComponentType<RoutableComponentProps>][],
  options: {
    context: React.Context<TContext> | void;
    scheduler: SchedulerLike | void;
  },
): React.ComponentType<TContext> => {
  const { context, scheduler = normalPriority } = options;

  return RxReactRouter.create(
    () => createRelativeURILocation(scheduler),
    notFoundComponent,
    routes,
    context,
  );
};

export const RelativeURILocation = {
  create: createRelativeURILocation,
};

export const Router = {
  create: createRelativeURIRouter,
};
