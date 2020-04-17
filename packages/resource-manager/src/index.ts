import {
  AbstractDisposable,
  DisposableLike,
  disposed,
} from "@reactive-js/disposable";
import {
  EnumerableLike,
  first,
  forEach,
  fromIterator,
  fromIterable,
} from "@reactive-js/enumerable";
import {
  ObservableLike,
  SafeSubscriberLike,
  createObservable,
  subscribe,
  ofValue,
  onNotify,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";

interface SetMultimapLike<K, V> {
  readonly count: number;
  readonly values: EnumerableLike<void, V>;

  add(key: K, value: V): void;
  clear(): void;
  get(key: K): ReadonlySet<V>;
  remove(key: K, value: V): void;
  removeAll(key: K): void;
}

function* iterateSetMultimapValues<K, V>(multimap: SetMultimap<K, V>) {
  for (const values of multimap.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

class SetMultimap<K, V> implements SetMultimapLike<K, V> {
  count = 0;
  readonly map: Map<K, Set<V>> = new Map();
  readonly values: EnumerableLike<void, V> = fromIterator(() =>
    iterateSetMultimapValues(this),
  );

  add(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) || new Set<V>();
    const valuesOldSize = values.size;
    values.add(value);
    const valuesNewSize = values.size;
    this.count += valuesNewSize - valuesOldSize;

    if (valuesOldSize === 0) {
      map.set(key, values);
    }
  }

  clear() {
    this.map.clear();
  }

  get(key: K): ReadonlySet<V> {
    return this.map.get(key) || new Set<V>();
  }

  remove(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) || new Set<V>();
    const valuesOldSize = values.size;
    values.delete(value);
    const valuesNewSize = values.size;

    this.count -= valuesOldSize - valuesNewSize;

    if (valuesNewSize === 0) {
      map.delete(key);
    }
  }

  removeAll(key: K) {
    const map = this.map;
    const values = map.get(key) || new Set<V>();
    const valuesSize = values.size;
    this.count -= valuesSize;
    map.delete(key);
  }
}

interface KeyedQueueLike<K, V> {
  readonly count: number;
  readonly values: EnumerableLike<void, V>;

  clear(): void;
  peek(key: K): V | undefined;
  pop(key: K): V | undefined;
  push(key: K, value: V): void;
}

function* iterateKeyedQueueValues<K, V>(queue: KeyedQueue<K, V>) {
  for (const values of queue.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

class KeyedQueue<K, V> implements KeyedQueueLike<K, V> {
  count = 0;
  readonly map: Map<K, V[]> = new Map();

  readonly values: EnumerableLike<void, V> = fromIterator(() =>
    iterateKeyedQueueValues(this),
  );

  clear() {
    this.map.clear();
  }

  peek(key: K): V | undefined {
    const map = this.map;
    const values = map.get(key) || [];
    return values[0];
  }

  pop(key: K): V | undefined {
    const map = this.map;
    const values = map.get(key) || [];
    const valuesOldSize = values.length;
    const result = values.shift();
    const valuesNewSize = values.length;

    this.count -= valuesOldSize - valuesNewSize;

    if (valuesNewSize === 0) {
      map.delete(key);
    }
    return result;
  }

  push(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) || [];
    const valuesOldSize = values.length;
    values.push(value);
    const valuesNewSize = values.length;
    this.count += valuesNewSize - valuesOldSize;

    if (valuesOldSize === 0) {
      map.set(key, values);
    }
  }
}

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
  while (peekedSubscriber !== undefined && peekedSubscriber.isDisposed) {
    resourceRequests.pop(hashedKey);
    peekedSubscriber = resourceRequests.peek(hashedKey);
  }

  if (peekedSubscriber === undefined) {
    // No work to do for the key
    return;
  }

  // Find the first not disposed resource but don't remove it from the queue.
  let peekedResource = availableResources.peek(hashedKey);
  while (peekedResource !== undefined && peekedResource.isDisposed) {
    availableResources.pop(hashedKey);
    peekedResource = availableResources.peek(hashedKey);
  }

  const inUseCount = inUseResources.get(hashedKey).size;

  if (
    peekedResource === undefined &&
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
    peekedResource === undefined &&
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
    peekedResource === undefined && inUseCount < maxResourcesPerKey
      ? resourceManager.createResource(key)
      : availableResources.pop(hashedKey);

  if (resource === undefined) {
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
      ofValue(undefined, maxIdleTime),
      onNotify(_ => {
        const resource = availableResources.pop(hashedKey);
        if (resource !== undefined) {
          resource.dispose();
        }

        // FIXME: Check the global queue for the next hashKey
        // awaiting a resource and dispatch it.
        const resourceKey = pipe(
          globalResourceWaitQueue.entries(),
          fromIterable,
          first,
        );

        if (resourceKey !== undefined) {
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
  readonly availableResources = new KeyedQueue<string, TResource>();
  readonly availableResourcesTimeouts = new Map<TResource, DisposableLike>();

  readonly inUseResources = new SetMultimap<
    string,
    SafeSubscriberLike<TResource>
  >();

  readonly resourceRequests = new KeyedQueue<
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
