import {
  AbstractDisposable,
  DisposableLike,
  Error,
  addTeardown,
  dispose,
  disposed,
} from "./disposable";
import {
  EnumerableLike,
  EnumeratorLike,
  enumerate,
  fromIterable,
  fromIterator,
  toRunnable,
} from "./enumerable";
import { Function1, defer, pipe } from "./functions";
import {
  DispatcherLike,
  ObservableLike,
  createObservable,
  fromValue,
  subscribe,
} from "./observable";

import { Option, isNone, isSome, none } from "./option";
import { first, forEach } from "./runnable";
import { SchedulerLike } from "./scheduler";

interface QueueLike<T> {
  readonly count: number;

  clear(): void;
  peek(): Option<T>;
  pop(): Option<T>;
  push(item: T): void;
}

class UniqueQueueImpl<T> implements QueueLike<T> {
  readonly values: Set<T> = new Set();

  get count(): number {
    return this.values.size;
  }

  clear() {
    this.values.clear();
  }

  enumerate(): EnumeratorLike<T> {
    return pipe(this.values, fromIterable(), enumerate);
  }

  peek() {
    return pipe(this.values, fromIterable(), toRunnable(), first);
  }

  pop() {
    const head = this.peek();
    if (isSome(head)) {
      this.values.delete(head);
    }
    return head;
  }

  push(item: T) {
    if (!this.values.has(item)) {
      this.values.add(item);
    }
  }
}

const createUniqueQueue = <T>(): QueueLike<T> => new UniqueQueueImpl();

interface KeyedEnumerableLike<K, V> extends EnumerableLike<[K, V]> {
  readonly keys: EnumerableLike<K>;
  readonly values: EnumerableLike<V>;
}

interface KeyedCollection<K, V> extends KeyedEnumerableLike<K, V> {
  readonly count: number;
}

interface KeyedQueueLike<K, V> extends KeyedCollection<K, V> {
  clear(): void;
  peek(key: K): Option<V>;
  pop(key: K): Option<V>;
  push(key: K, value: V): void;
}

function* iterateKeyedQueueValues<K, V>(queue: KeyedQueue<K, V>) {
  for (const values of queue.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

function* iterateKeyedQueueKeyValuePairs<K, V>(
  queue: KeyedQueue<K, V>,
): Generator<[K, V]> {
  const map = queue.map;
  for (const key of map.keys()) {
    const values = map.get(key) ?? [];
    for (const value of values) {
      yield [key, value];
    }
  }
}

class KeyedQueue<K, V> implements KeyedQueueLike<K, V> {
  count = 0;

  readonly keys: EnumerableLike<K> = fromIterator<K>()(() => this.map.keys());

  readonly map: Map<K, V[]> = new Map();

  readonly values: EnumerableLike<V> = fromIterator<V>()(
    defer(this, iterateKeyedQueueValues),
  );

  clear() {
    this.map.clear();
  }

  enumerate(): EnumeratorLike<[K, V]> {
    return pipe(
      defer(this, iterateKeyedQueueKeyValuePairs),
      fromIterator(),
      enumerate,
    );
  }

  peek(key: K): Option<V> {
    const map = this.map;
    const values = map.get(key) ?? [];
    return values[0];
  }

  pop(key: K): Option<V> {
    const map = this.map;
    const values = map.get(key) ?? [];
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
    const values = map.get(key) ?? [];
    const valuesOldSize = values.length;
    values.push(value);
    const valuesNewSize = values.length;
    this.count += valuesNewSize - valuesOldSize;

    if (valuesOldSize === 0) {
      map.set(key, values);
    }
  }
}

const createKeyedQueue = <K, V>(): KeyedQueueLike<K, V> => new KeyedQueue();

function* iterateSetMultimapValues<K, V>(multimap: SetMultimap<K, V>) {
  for (const values of multimap.map.values()) {
    for (const value of values) {
      yield value;
    }
  }
}

function* iterateSetMultimapKeyValuePairs<K, V>(
  queue: SetMultimap<K, V>,
): Generator<[K, V]> {
  const map = queue.map;
  for (const key of map.keys()) {
    const values = map.get(key) ?? new Set();
    for (const value of values) {
      yield [key, value];
    }
  }
}

interface SetMultimapLike<K, V> extends KeyedCollection<K, V> {
  add(key: K, value: V): void;
  clear(): void;
  get(key: K): ReadonlySet<V>;
  remove(key: K, value: V): void;
  removeAll(key: K): void;
}

class SetMultimap<K, V> implements SetMultimapLike<K, V> {
  count = 0;
  readonly keys: EnumerableLike<K> = fromIterator<K>()(() => this.map.keys());
  readonly map: Map<K, Set<V>> = new Map();
  readonly values: EnumerableLike<V> = fromIterator<V>()(
    defer(this, iterateSetMultimapValues),
  );

  add(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) ?? new Set<V>();
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

  enumerate(): EnumeratorLike<[K, V]> {
    return pipe(
      defer(this, iterateSetMultimapKeyValuePairs),
      fromIterator(),
      enumerate,
    );
  }

  get(key: K): ReadonlySet<V> {
    return this.map.get(key) ?? new Set<V>();
  }

  remove(key: K, value: V) {
    const map = this.map;
    const values = map.get(key) ?? new Set<V>();
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
    const values = map.get(key) ?? new Set<V>();
    const valuesSize = values.size;
    this.count -= valuesSize;
    map.delete(key);
  }
}

const createSetMultimap = <K, V>(): SetMultimapLike<K, V> => new SetMultimap();

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
    pipe(disposable, dispose());
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
  pipe(timeoutSubscription, dispose());

  // We have resource to allocate so pop
  // the observer off the request queue
  // and mark the resource as in use
  const observer = resourceRequests.pop(key) as DispatcherLike<TResource> &
    DisposableLike;
  addTeardown(observer, () => {
    inUseResources.remove(key, observer);
    availableResources.push(key, resource);

    // Setup the timeout subscription
    const timeoutSubscription = pipe(
      fromValue({ delay: maxIdleTime })(none),
      subscribe(scheduler, _ => {
        const resource = availableResources.pop(key);
        if (isSome(resource)) {
          pipe(resource, dispose());

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
    );
    addTeardown(timeoutSubscription, () => {
      availableResourcesTimeouts.delete(resource);
    }),
      availableResourcesTimeouts.set(resource, timeoutSubscription);

    tryDispatch(resourceManager, key);
  });

  inUseResources.add(key, observer);
  observer.dispatch(resource);
};

export interface ResourceManagerLike<TResource> extends DisposableLike {
  readonly count: number;

  get(key: string): ObservableLike<TResource>;
}

function onDispose<T extends DisposableLike>(
  this: ResourceManagerImpl<T>,
  error: Option<Error>,
) {
  const forEachDispose = forEach(dispose(error));

  pipe(this.resourceRequests.values, forEachDispose);
  this.resourceRequests.clear();

  pipe(this.inUseResources.values, forEachDispose);
  this.inUseResources.clear();

  pipe(this.availableResources.values, forEachDispose);
  this.availableResources.clear();
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
    DispatcherLike<TResource> & DisposableLike
  >();
  readonly globalResourceWaitQueue = createUniqueQueue<string>();

  constructor(
    readonly createResource: Function1<string, TResource>,
    readonly scheduler: SchedulerLike,
    readonly maxIdleTime: number,
    readonly maxResourcesPerKey: number,
    readonly maxTotalResources: number,
  ) {
    super();

    addTeardown(this, onDispose);
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
  createResource: Function1<string, TResource>,
  scheduler: SchedulerLike,
  options: {
    readonly maxIdleTime?: number;
    readonly maxResourcesPerKey?: number;
    readonly maxTotalResources?: number;
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
