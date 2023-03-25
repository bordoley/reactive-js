import type {
  CacheConfig,
  Environment,
  FetchQueryFetchPolicy,
  GraphQLTaggedNode,
  OperationType,
} from "relay-runtime";
import relay from 'relay-runtime';
import { bind, pipe } from "../functions.js";
import { DispatcherLike_complete, ObservableLike } from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { QueueableLike_push } from "../util.js";
import * as Disposable from "../util/Disposable.js";

const { fetchQuery: relayFetchQuery } = relay;

export const fetchQuery = <T extends OperationType>(
  environment: Environment,
  taggedNode: GraphQLTaggedNode,
  variables: T["variables"],
  cacheConfig?: {
    networkCacheConfig?: CacheConfig;
    fetchPolicy?: FetchQueryFetchPolicy;
  },
): ObservableLike<T["response"]> =>
  Observable.create(observer => {
    const relaySubscription = relayFetchQuery(
      environment,
      taggedNode,
      variables,
      cacheConfig,
    ).subscribe({
      start: () => {},
      complete: bind(observer[DispatcherLike_complete], observer),
      error: Disposable.toErrorHandler(observer),
      next: bind(observer[QueueableLike_push], observer),
    });

    pipe(
      observer,
      Disposable.onDisposed(relaySubscription.unsubscribe, relaySubscription),
    );
  });
