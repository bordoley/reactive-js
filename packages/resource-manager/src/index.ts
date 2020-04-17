import { createKeyedQueue, createSetMultimap } from "@reactive-js/collections";
import {
  AbstractDisposable,
  DisposableLike,
  disposed,
} from "@reactive-js/disposable";
import { first, forEach, fromIterable } from "@reactive-js/enumerable";
import {
  ObservableLike,
  SafeSubscriberLike,
  createObservable,
  subscribe,
  ofValue,
  onNotify,
} from "@reactive-js/observable";
import { isSome, isNone, none } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";

const tryDispatch = <TKey, TResource extends DisposableLike>(
  resourceManager: ResourceManagerImpl<TKey, TResource>,
  key: TKey,
  hashedKey: string,
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
  let peekedSubscriber = resourceRequests.peek(hashedKey);
  while (isSome(peekedSubscriber) && peekedSubscriber.isDisposed) {
    resourceRequests.pop(hashedKey);
    peekedSubscriber = resourceRequests.peek(hashedKey);
  }

  if (isNone(peekedSubscriber)) {
    // No work to do for the key
    return;
  }

  // Find the first not disposed resource but don't remove it from the queue.
  let peekedResource = availableResources.peek(hashedKey);
  while (isSome(peekedResource) && peekedResource.isDisposed) {
    availableResources.pop(hashedKey);
    peekedResource = availableResources.peek(hashedKey);
  }

  const inUseCount = inUseResources.get(hashedKey).size;

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
    if (!globalResourceWaitQueue.has(hashedKey)) {
      globalResourceWaitQueue.set(hashedKey, key);
    }
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
      : availableResources.pop(hashedKey);

  if (isNone(resource)) {
    // Failed to allocate a resource because
    // we've hit the max resources per key.
    return;
  }

  // Remove the timeout from the allocated resource
  const timeoutSubscription =
    availableResourcesTimeouts.get(resource) || disposed;
  availableResourcesTimeouts.delete(resource);
  timeoutSubscription.dispose();

  // We have resource to allocate so pop
  // the subscriber off the request queue
  // and mark the resource as in use
  const subscriber = resourceRequests.pop(hashedKey) as SafeSubscriberLike<
    TResource
  >;
  inUseResources.add(hashedKey, subscriber);

  subscriber.add(() => {
    inUseResources.remove(hashedKey, subscriber);
    availableResources.push(hashedKey, resource);

    // Setup the timeout subscription
    const timeoutSubscription = pipe(
      ofValue(none, maxIdleTime),
      onNotify(_ => {
        const resource = availableResources.pop(hashedKey);
        if (isSome(resource)) {
          resource.dispose();
        }

        // FIXME: Check the global queue for the next hashKey
        // awaiting a resource and dispatch it.
        const resourceKey = pipe(
          globalResourceWaitQueue.entries(),
          fromIterable,
          first,
        );

        if (isSome(resourceKey)) {
          const [hashedKey, key] = resourceKey;
          globalResourceWaitQueue.delete(hashedKey);

          tryDispatch(resourceManager, key, hashedKey);
        }
      }),
      subscribe(scheduler),
    ).add(() => {
      availableResourcesTimeouts.delete(resource);
    });
    availableResourcesTimeouts.set(resource, timeoutSubscription);

    tryDispatch(resourceManager, key, hashedKey);
  });
  subscriber.dispatch(resource);
  return;
};

export interface ResourceManagerLike<TKey, TResource> extends DisposableLike {
  readonly count: number;

  get(key: TKey): ObservableLike<TResource>;
}

class ResourceManagerImpl<TKey, TResource extends DisposableLike>
  extends AbstractDisposable
  implements ResourceManagerLike<TKey, TResource> {
  readonly availableResources = createKeyedQueue<string, TResource>();
  readonly availableResourcesTimeouts = new Map<TResource, DisposableLike>();

  readonly inUseResources = createSetMultimap<
    string,
    SafeSubscriberLike<TResource>
  >();

  readonly resourceRequests = createKeyedQueue<
    string,
    SafeSubscriberLike<TResource>
  >();
  readonly globalResourceWaitQueue = new Map<string, TKey>();

  constructor(
    readonly createResource: (key: TKey) => TResource,
    readonly hash: (key: TKey) => string,
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

  get(key: TKey): ObservableLike<TResource> {
    return createObservable(subscriber => {
      const hashedKey = this.hash(key);

      this.resourceRequests.push(hashedKey, subscriber);
      tryDispatch(this, key, hashedKey);
    });
  }
}

export const createResourceManager = <TKey, TResource extends DisposableLike>(
  createResource: (key: TKey) => TResource,
  hash: (key: TKey) => string,
  scheduler: SchedulerLike,
  options: {
    maxIdleTime?: number;
    maxResourcesPerKey?: number;
    maxTotalResources?: number;
  } = {},
): ResourceManagerLike<TKey, TResource> => {
  const {
    maxIdleTime = Number.MAX_SAFE_INTEGER,
    maxResourcesPerKey = 256,
    maxTotalResources = Number.MAX_SAFE_INTEGER,
  } = options;
  return new ResourceManagerImpl(
    createResource,
    hash,
    scheduler,
    maxIdleTime,
    maxResourcesPerKey,
    maxTotalResources,
  );
};
