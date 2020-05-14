import { AbstractDisposable, disposed, dispose, add, addDisposableOrTeardown, } from "../disposable.js";
import { first, forEach, fromIterable } from "../enumerable.js";
import { pipe } from "../functions.js";
import { createKeyedQueue } from "./keyedQueue.js";
import { createSetMultimap } from "./multimaps.js";
import { createUniqueQueue } from "./queues.js";
import { createObservable, subscribe, fromValue, onNotify, dispatch, } from "../observable.js";
import { isSome, isNone, none } from "../option.js";
const tryDispatch = (resourceManager, key) => {
    var _a;
    const { availableResources, availableResourcesTimeouts, maxIdleTime, maxResourcesPerKey, maxTotalResources, inUseResources, scheduler, resourceRequests, globalResourceWaitQueue, } = resourceManager;
    let peekedObserver = resourceRequests.peek(key);
    while (isSome(peekedObserver) && peekedObserver.isDisposed) {
        resourceRequests.pop(key);
        peekedObserver = resourceRequests.peek(key);
    }
    if (isNone(peekedObserver)) {
        return;
    }
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
        globalResourceWaitQueue.push(key);
        return;
    }
    if (isNone(peekedResource) &&
        inUseCount < maxResourcesPerKey &&
        resourceManager.count >= maxTotalResources) {
        const [resource, disposable] = pipe(availableResourcesTimeouts, fromIterable, first);
        availableResourcesTimeouts.delete(resource);
        dispose(disposable);
    }
    const resource = isNone(peekedResource) && inUseCount < maxResourcesPerKey
        ? resourceManager.createResource(key)
        : availableResources.pop(key);
    if (isNone(resource)) {
        return;
    }
    const timeoutSubscription = (_a = availableResourcesTimeouts.get(resource)) !== null && _a !== void 0 ? _a : disposed;
    availableResourcesTimeouts.delete(resource);
    dispose(timeoutSubscription);
    const observer = add(resourceRequests.pop(key), () => {
        inUseResources.remove(key, observer);
        availableResources.push(key, resource);
        const timeoutSubscription = pipe(fromValue({ delay: maxIdleTime })(none), onNotify(_ => {
            const resource = availableResources.pop(key);
            if (isSome(resource)) {
                dispose(resource);
                const resourceKey = globalResourceWaitQueue.pop();
                if (isSome(resourceKey)) {
                    tryDispatch(resourceManager, resourceKey);
                }
            }
        }), subscribe(scheduler), addDisposableOrTeardown(() => {
            availableResourcesTimeouts.delete(resource);
        }));
        availableResourcesTimeouts.set(resource, timeoutSubscription);
        tryDispatch(resourceManager, key);
    });
    inUseResources.add(key, observer);
    dispatch(observer, resource);
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
        add(this, e => {
            const forEachDispose = forEach((s) => dispose(s, e));
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
export const createResourceManager = (createResource, scheduler, options = {}) => {
    const { maxIdleTime = Number.MAX_SAFE_INTEGER, maxResourcesPerKey = 256, maxTotalResources = Number.MAX_SAFE_INTEGER, } = options;
    return new ResourceManagerImpl(createResource, scheduler, maxIdleTime, maxResourcesPerKey, maxTotalResources);
};
