import { AbstractDisposable, DisposableLike, disposed } from "./disposable";
import { first, forEach, fromIterable } from "./enumerable";
import { pipe } from "./functions";
import { createKeyedQueue } from "./internal/keyedQueue";
import { createSetMultimap } from "./internal/multimaps";
import { createUniqueQueue } from "./internal/queues";
import {
  DispatcherLike,
  ObservableLike,
  createObservable,
  subscribe,
  fromValue,
  onNotify,
} from "./observable";
import { isSome, isNone, none } from "./option";
import { SchedulerLike } from "./scheduler";

const tryDispatch = <TResource extends DisposableLike>(
  resourceManager: ResourceManagerImpl<TResource>,
  key: string,
) => {
  const {
    availableResources,
    availableResourcesTimeouts,
    maxIdleTime,
    maxResourcesPerKey,
    maxTotalResources,
    inUseResources,
    scheduler,
    resourceRequests,
    globalResourceWaitQueue,
  } = resourceManager;

  // Find the first not disposed subscriber but don't remove it from the queue.
  let peekedSubscriber = resourceRequests.peek(key);
  while (isSome(peekedSubscriber) && peekedSubscriber.isDisposed) {
    resourceRequests.pop(key);
    peekedSubscriber = resourceRequests.peek(key);
  }

  if (isNone(peekedSubscriber)) {
    // No work to do for the current key
    return;
  }

  // Find the first not disposed resource but don't remove it from the queue.
  let peekedResource = availableResources.peek(key);
  while (isSome(peekedResource) && peekedResource.isDisposed) {
    availableResources.pop(key);
    peekedResource = availableResources.peek(key);
  }

  const inUseCount = inUseResources.get(key).size;

  if (
    isNone(peekedResource) &&
    inUseCount < maxResourcesPerKey &&
    resourceManager.count >= maxTotalResources &&
    availableResources.count === 0
  ) {
    // The global max resource count has been hit
    // but the per key limit hasn't been reached
    // and there are no resources in the wait queue
    // so schedule the key for the next available
    // resource allocation.
    globalResourceWaitQueue.push(key);
    return;
  }

  if (
    isNone(peekedResource) &&
    inUseCount < maxResourcesPerKey &&
    resourceManager.count >= maxTotalResources
  ) {
    // Free the oldest unused resource and continue
    const [resource, disposable] = pipe(
      availableResourcesTimeouts,
      fromIterable,
      first,
    ) as [TResource, DisposableLike];
    availableResourcesTimeouts.delete(resource);
    disposable.dispose();
  }

  const resource =
    isNone(peekedResource) && inUseCount < maxResourcesPerKey
      ? resourceManager.createResource(key)
      : availableResources.pop(key);

  if (isNone(resource)) {
    // Failed to allocate a resource because
    // we've hit the max resources per key.
    return;
  }

  // Remove the timeout from the allocated resource
  const timeoutSubscription =
    availableResourcesTimeouts.get(resource) ?? disposed;
  availableResourcesTimeouts.delete(resource);
  timeoutSubscription.dispose();

  // We have resource to allocate so pop
  // the subscriber off the request queue
  // and mark the resource as in use
  const subscriber = resourceRequests.pop(key) as DispatcherLike<TResource>;
  inUseResources.add(key, subscriber);

  subscriber.add(() => {
    inUseResources.remove(key, subscriber);
    availableResources.push(key, resource);

    // Setup the timeout subscription
    const timeoutSubscription = pipe(
      fromValue(maxIdleTime)(none),
      onNotify(_ => {
        const resource = availableResources.pop(key);
        if (isSome(resource)) {
          resource.dispose();

          // Check the global queue for the next key
          // awaiting a resource and dispatch it.
          const resourceKey = globalResourceWaitQueue.pop();
          if (isSome(resourceKey)) {
            // FIXME: What happens if all requests for this
            // resource are disposed. We should move on to the next but
            // don't afaict.
            tryDispatch(resourceManager, resourceKey);
          }
        }
      }),
      subscribe(scheduler),
    ).add(() => {
      availableResourcesTimeouts.delete(resource);
    });
    availableResourcesTimeouts.set(resource, timeoutSubscription);

    tryDispatch(resourceManager, key);
  });
  subscriber.dispatch(resource);
};

export interface ResourceManagerLike<TResource> extends DisposableLike {
  readonly count: number;

  get(key: string): ObservableLike<TResource>;
}

class ResourceManagerImpl<TResource extends DisposableLike>
  extends AbstractDisposable
  implements ResourceManagerLike<TResource> {
  readonly availableResources = createKeyedQueue<string, TResource>();
  readonly availableResourcesTimeouts = new Map<TResource, DisposableLike>();

  readonly inUseResources = createSetMultimap<
    string,
    DispatcherLike<TResource>
  >();

  readonly resourceRequests = createKeyedQueue<
    string,
    DispatcherLike<TResource>
  >();
  readonly globalResourceWaitQueue = createUniqueQueue<string>();

  constructor(
    readonly createResource: (key: string) => TResource,
    readonly scheduler: SchedulerLike,
    readonly maxIdleTime: number,
    readonly maxResourcesPerKey: number,
    readonly maxTotalResources: number,
  ) {
    super();

    this.add(e => {
      const forEachDispose = forEach((s: DisposableLike) => s.dispose(e));

      pipe(this.resourceRequests.values, forEachDispose);
      this.resourceRequests.clear();

      pipe(this.inUseResources.values, forEachDispose);
      this.inUseResources.clear();

      pipe(this.availableResources.values, forEachDispose);
      this.availableResources.clear();
    });
  }

  get count() {
    return this.availableResources.count + this.inUseResources.count;
  }

  get(key: string): ObservableLike<TResource> {
    return createObservable(subscriber => {
      this.resourceRequests.push(key, subscriber);
      tryDispatch(this, key);
    });
  }
}

export const createResourceManager = <TResource extends DisposableLike>(
  createResource: (key: string) => TResource,
  scheduler: SchedulerLike,
  options: {
    maxIdleTime?: number;
    maxResourcesPerKey?: number;
    maxTotalResources?: number;
  } = {},
): ResourceManagerLike<TResource> => {
  const {
    maxIdleTime = Number.MAX_SAFE_INTEGER,
    maxResourcesPerKey = 256,
    maxTotalResources = Number.MAX_SAFE_INTEGER,
  } = options;
  return new ResourceManagerImpl(
    createResource,
    scheduler,
    maxIdleTime,
    maxResourcesPerKey,
    maxTotalResources,
  );
};
