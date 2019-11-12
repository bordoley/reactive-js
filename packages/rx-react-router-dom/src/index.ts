import { Router as RxReactRouter, RelativeURI, RoutableComponentProps } from "@rx-min/rx-react-router";
import {
  ObservableStateResource,
  ObservableState,
  StateUpdater,
} from "@rx-min/rx-observable-state";
import { Location } from "@rx-min/rx-dom";
import { SchedulerLike } from "@rx-min/rx-core";
import { normalPriority } from "@rx-min/rx-scheduler";

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

const mapper = (v: string): RelativeURI => {
  const parsedAccURL = new URL(v);
  return {
    path: parsedAccURL.pathname,
    query: parsedAccURL.search,
    fragment: parsedAccURL.hash,
  };
};

const createRelativeURILocation = (scheduler: SchedulerLike) =>
  ObservableStateResource.map(Location.create(scheduler), reducer, mapper);

const createRelativeURIRouter = <TContext>(
  notFoundComponent: React.ComponentType<RoutableComponentProps>,
  routes: readonly [string, React.ComponentType<RoutableComponentProps>][],
  context: React.Context<TContext> | void,
  scheduler: SchedulerLike = normalPriority,
): React.ComponentType<TContext> => RxReactRouter.create(
  () => createRelativeURILocation(scheduler), 
  notFoundComponent,
  routes,
  context,
);

export const RelativeURILocation = {
  create: createRelativeURILocation,
};

export const Router = {
  create: createRelativeURIRouter,
};