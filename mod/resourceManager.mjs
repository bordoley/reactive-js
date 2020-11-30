import { isSome, isNone, none } from './option.mjs';
import { pipe } from './functions.mjs';
import { dispose, disposed, addTeardown, AbstractDisposable } from './disposable.mjs';
import { fromIterable, toRunnable } from './enumerable.mjs';
import { first, forEach } from './runnable.mjs';
import { createUniqueQueue } from './queues.mjs';
import { fromValue, onNotify, subscribe, createObservable } from './observable.mjs';
import { createKeyedQueue } from './keyedQueue.mjs';
import { createSetMultimap } from './multimaps.mjs';

const tryDispatch = (resourceManager, key) => {
    var _a;
    const { availableResources, availableResourcesTimeouts, maxIdleTime, maxResourcesPerKey, maxTotalResources, inUseResources, scheduler, resourceRequests, globalResourceWaitQueue, } = resourceManager;
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
    if (isNone(peekedResource) &&
        inUseCount < maxResourcesPerKey &&
        resourceManager.count >= maxTotalResources &&
        availableResources.count === 0) {
        // The global max resource count has been hit
        // but the per key limit hasn't been reached
        // and there are no resources in the wait queue
        // so schedule the key for the next available
        // resource allocation.
        globalResourceWaitQueue.push(key);
        return;
    }
    if (isNone(peekedResource) &&
        inUseCount < maxResourcesPerKey &&
        resourceManager.count >= maxTotalResources) {
        // Free the oldest unused resource and continue
        const [resource, disposable] = pipe(availableResourcesTimeouts, fromIterable, toRunnable(), first);
        availableResourcesTimeouts.delete(resource);
        pipe(disposable, dispose());
    }
    const resource = isNone(peekedResource) && inUseCount < maxResourcesPerKey
        ? resourceManager.createResource(key)
        : availableResources.pop(key);
    if (isNone(resource)) {
        // Failed to allocate a resource because
        // we've hit the max resources per key.
        return;
    }
    // Remove the timeout from the allocated resource
    const timeoutSubscription = (_a = availableResourcesTimeouts.get(resource)) !== null && _a !== void 0 ? _a : disposed;
    availableResourcesTimeouts.delete(resource);
    pipe(timeoutSubscription, dispose());
    // We have resource to allocate so pop
    // the observer off the request queue
    // and mark the resource as in use
    const observer = resourceRequests.pop(key);
    addTeardown(observer, () => {
        inUseResources.remove(key, observer);
        availableResources.push(key, resource);
        // Setup the timeout subscription
        const timeoutSubscription = pipe(fromValue({ delay: maxIdleTime })(none), onNotify(_ => {
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
        }), subscribe(scheduler));
        addTeardown(timeoutSubscription, () => {
            availableResourcesTimeouts.delete(resource);
        }),
            availableResourcesTimeouts.set(resource, timeoutSubscription);
        tryDispatch(resourceManager, key);
    });
    inUseResources.add(key, observer);
    observer.dispatch(resource);
};
class ResourceManagerImpl extends AbstractDisposable {
    constructor(createResource, scheduler, maxIdleTime, maxResourcesPerKey, maxTotalResources) {
        super();
        this.createResource = createResource;
        this.scheduler = scheduler;
        this.maxIdleTime = maxIdleTime;
        this.maxResourcesPerKey = maxResourcesPerKey;
        this.maxTotalResources = maxTotalResources;
        this.availableResources = createKeyedQueue();
        this.availableResourcesTimeouts = new Map();
        this.inUseResources = createSetMultimap();
        this.resourceRequests = createKeyedQueue();
        this.globalResourceWaitQueue = createUniqueQueue();
        addTeardown(this, e => {
            const forEachDispose = forEach(dispose(e));
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
    get(key) {
        return createObservable(dispatcher => {
            this.resourceRequests.push(key, dispatcher);
            tryDispatch(this, key);
        });
    }
}
const createResourceManager = (createResource, scheduler, options = {}) => {
    const { maxIdleTime = Number.MAX_SAFE_INTEGER, maxResourcesPerKey = 256, maxTotalResources = Number.MAX_SAFE_INTEGER, } = options;
    return new ResourceManagerImpl(createResource, scheduler, maxIdleTime, maxResourcesPerKey, maxTotalResources);
};

export { createResourceManager };
