'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
var enumerable = require('./enumerable.js');
var runnable = require('./runnable.js');
var queues = require('./queues.js');
var observable = require('./observable.js');
var keyedQueue = require('./keyedQueue.js');
var multimaps = require('./multimaps.js');

const tryDispatch = (resourceManager, key) => {
    var _a;
    const { availableResources, availableResourcesTimeouts, maxIdleTime, maxResourcesPerKey, maxTotalResources, inUseResources, scheduler, resourceRequests, globalResourceWaitQueue, } = resourceManager;
    // Find the first not disposed observer but don't remove it from the queue.
    let peekedObserver = resourceRequests.peek(key);
    while (option.isSome(peekedObserver) && peekedObserver.isDisposed) {
        resourceRequests.pop(key);
        peekedObserver = resourceRequests.peek(key);
    }
    if (option.isNone(peekedObserver)) {
        // No work to do for the current key
        return;
    }
    // Find the first not disposed resource but don't remove it from the queue.
    let peekedResource = availableResources.peek(key);
    while (option.isSome(peekedResource) && peekedResource.isDisposed) {
        availableResources.pop(key);
        peekedResource = availableResources.peek(key);
    }
    const inUseCount = inUseResources.get(key).size;
    if (option.isNone(peekedResource) &&
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
    if (option.isNone(peekedResource) &&
        inUseCount < maxResourcesPerKey &&
        resourceManager.count >= maxTotalResources) {
        // Free the oldest unused resource and continue
        const [resource, disposable$1] = functions.pipe(availableResourcesTimeouts, enumerable.fromIterable, enumerable.toRunnable(), runnable.first);
        availableResourcesTimeouts.delete(resource);
        functions.pipe(disposable$1, disposable.dispose());
    }
    const resource = option.isNone(peekedResource) && inUseCount < maxResourcesPerKey
        ? resourceManager.createResource(key)
        : availableResources.pop(key);
    if (option.isNone(resource)) {
        // Failed to allocate a resource because
        // we've hit the max resources per key.
        return;
    }
    // Remove the timeout from the allocated resource
    const timeoutSubscription = (_a = availableResourcesTimeouts.get(resource)) !== null && _a !== void 0 ? _a : disposable.disposed;
    availableResourcesTimeouts.delete(resource);
    functions.pipe(timeoutSubscription, disposable.dispose());
    // We have resource to allocate so pop
    // the observer off the request queue
    // and mark the resource as in use
    const observer = resourceRequests.pop(key);
    disposable.addTeardown(observer, () => {
        inUseResources.remove(key, observer);
        availableResources.push(key, resource);
        // Setup the timeout subscription
        const timeoutSubscription = functions.pipe(observable.fromValue({ delay: maxIdleTime })(option.none), observable.onNotify(_ => {
            const resource = availableResources.pop(key);
            if (option.isSome(resource)) {
                functions.pipe(resource, disposable.dispose());
                // Check the global queue for the next key
                // awaiting a resource and dispatch it.
                const resourceKey = globalResourceWaitQueue.pop();
                if (option.isSome(resourceKey)) {
                    // FIXME: What happens if all requests for this
                    // resource are disposed. We should move on to the next but
                    // don't afaict.
                    tryDispatch(resourceManager, resourceKey);
                }
            }
        }), observable.subscribe(scheduler));
        disposable.addTeardown(timeoutSubscription, () => {
            availableResourcesTimeouts.delete(resource);
        }),
            availableResourcesTimeouts.set(resource, timeoutSubscription);
        tryDispatch(resourceManager, key);
    });
    inUseResources.add(key, observer);
    observer.dispatch(resource);
};
class ResourceManagerImpl extends disposable.AbstractDisposable {
    constructor(createResource, scheduler, maxIdleTime, maxResourcesPerKey, maxTotalResources) {
        super();
        this.createResource = createResource;
        this.scheduler = scheduler;
        this.maxIdleTime = maxIdleTime;
        this.maxResourcesPerKey = maxResourcesPerKey;
        this.maxTotalResources = maxTotalResources;
        this.availableResources = keyedQueue.createKeyedQueue();
        this.availableResourcesTimeouts = new Map();
        this.inUseResources = multimaps.createSetMultimap();
        this.resourceRequests = keyedQueue.createKeyedQueue();
        this.globalResourceWaitQueue = queues.createUniqueQueue();
        disposable.addTeardown(this, e => {
            const forEachDispose = runnable.forEach(disposable.dispose(e));
            functions.pipe(this.resourceRequests.values, forEachDispose);
            this.resourceRequests.clear();
            functions.pipe(this.inUseResources.values, forEachDispose);
            this.inUseResources.clear();
            functions.pipe(this.availableResources.values, forEachDispose);
            this.availableResources.clear();
        });
    }
    get count() {
        return this.availableResources.count + this.inUseResources.count;
    }
    get(key) {
        return observable.createObservable(dispatcher => {
            this.resourceRequests.push(key, dispatcher);
            tryDispatch(this, key);
        });
    }
}
const createResourceManager = (createResource, scheduler, options = {}) => {
    const { maxIdleTime = Number.MAX_SAFE_INTEGER, maxResourcesPerKey = 256, maxTotalResources = Number.MAX_SAFE_INTEGER, } = options;
    return new ResourceManagerImpl(createResource, scheduler, maxIdleTime, maxResourcesPerKey, maxTotalResources);
};

exports.createResourceManager = createResourceManager;
