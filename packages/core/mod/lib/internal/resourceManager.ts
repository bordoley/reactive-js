import {
  AbstractDisposable,
  DisposableLike,
  disposed,
  dispose,
  add,
  addDisposableOrTeardown,
} from "../disposable.ts";
import { fromIterable, toRunnable } from "../enumerable.ts";
import { first, forEach } from "../runnable.ts";
import { pipe, Function } from "../functions.ts";
import { createKeyedQueue } from "./keyedQueue.ts";
import { createSetMultimap } from "./multimaps.ts";
import { createUniqueQueue } from "./queues.ts";
import {
  DispatcherLike,
  ObservableLike,
  createObservable,
  subscribe,
  fromValue,
  onNotify,
  dispatch,
} from "../observable.ts";
import { isSome, isNone, none } from "../option.ts";
import { SchedulerLike } from "../scheduler.ts";

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

  // Find the first not disposed observer but don't remove it from the queue.
  let peekedObserver = resourceRequests.peek(key);
  while (isSome(peekedObserver) && peekedObserver.isDisposed) {
    resourceRequests.pop(key);
    peekedObserver = resourceRequests.peek(key);
  }

  if (isNone(peekedObserver)) {
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
      toRunnable(),
      first,
    ) as [TResource, DisposableLike];
    availableResourcesTimeouts.delete(resource);
    dispose(disposable);
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
  dispose(timeoutSubscription);

  // We have resource to allocate so pop
  // the observer off the request queue
  // and mark the resource as in use
  const observer = add(
    resourceRequests.pop(key) as DispatcherLike<TResource>,
    () => {
      inUseResources.remove(key, observer);
      availableResources.push(key, resource);

      // Setup the timeout subscription
      const timeoutSubscription = pipe(
        fromValue({ delay: maxIdleTime })(none),
        onNotify(_ => {
          const resource = availableResources.pop(key);
          if (isSome(resource)) {
            dispose(resource);

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
        addDisposableOrTeardown(() => {
          availableResourcesTimeouts.delete(resource);
        }),
      );
      availableResourcesTimeouts.set(resource, timeoutSubscription);

      tryDispatch(resourceManager, key);
    },
  );

  inUseResources.add(key, observer);
  dispatch(observer, resource);
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
    readonly createResource: Function<string, TResource>,
    readonly scheduler: SchedulerLike,
    readonly maxIdleTime: number,
    readonly maxResourcesPerKey: number,
    readonly maxTotalResources: number,
  ) {
    super();

    add(this, e => {
      const forEachDispose = forEach((s: DisposableLike) => dispose(s, e));

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
    return createObservable(dispatcher => {
      this.resourceRequests.push(key, dispatcher);
      tryDispatch(this, key);
    });
  }
}

export const createResourceManager = <TResource extends DisposableLike>(
  createResource: Function<string, TResource>,
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
