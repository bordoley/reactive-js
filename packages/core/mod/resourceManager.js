import { createUniqueQueue } from "./internal/queues.js";
import { createKeyedQueue } from "./internal/keyedQueue.js";
import { createSetMultimap } from "./internal/multimaps.js";
import { AbstractDisposable, disposed } from "./disposable.js";
import { first, forEach, fromIterable } from "./enumerable.js";
import { createObservable, subscribe, ofValue, onNotify, } from "./observable.js";
import { isSome, isNone, none } from "./option.js";
import { pipe } from "./functions.js";
const tryDispatch = (resourceManager, key) => {
    const { availableResources, availableResourcesTimeouts, maxIdleTime, maxResourcesPerKey, maxTotalResources, inUseResources, scheduler, resourceRequests, globalResourceWaitQueue, } = resourceManager;
    let peekedSubscriber = resourceRequests.peek(key);
    while (isSome(peekedSubscriber) && peekedSubscriber.isDisposed) {
        resourceRequests.pop(key);
        peekedSubscriber = resourceRequests.peek(key);
    }
    if (isNone(peekedSubscriber)) {
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
        disposable.dispose();
    }
    const resource = isNone(peekedResource) && inUseCount < maxResourcesPerKey
        ? resourceManager.createResource(key)
        : availableResources.pop(key);
    if (isNone(resource)) {
        return;
    }
    const timeoutSubscription = availableResourcesTimeouts.get(resource) ?? disposed;
    availableResourcesTimeouts.delete(resource);
    timeoutSubscription.dispose();
    const subscriber = resourceRequests.pop(key);
    inUseResources.add(key, subscriber);
    subscriber.add(() => {
        inUseResources.remove(key, subscriber);
        availableResources.push(key, resource);
        const timeoutSubscription = pipe(ofValue(none, maxIdleTime), onNotify(_ => {
            const resource = availableResources.pop(key);
            if (isSome(resource)) {
                resource.dispose();
                const resourceKey = globalResourceWaitQueue.pop();
                if (isSome(resourceKey)) {
                    tryDispatch(resourceManager, resourceKey);
                }
            }
        }), subscribe(scheduler)).add(() => {
            availableResourcesTimeouts.delete(resource);
        });
        availableResourcesTimeouts.set(resource, timeoutSubscription);
        tryDispatch(resourceManager, key);
    });
    subscriber.dispatch(resource);
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
        this.add(e => {
            const forEachDispose = forEach((s) => s.dispose(e));
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
        return createObservable(subscriber => {
            this.resourceRequests.push(key, subscriber);
            tryDispatch(this, key);
        });
    }
}
export const createResourceManager = (createResource, scheduler, options = {}) => {
    const { maxIdleTime = Number.MAX_SAFE_INTEGER, maxResourcesPerKey = 256, maxTotalResources = Number.MAX_SAFE_INTEGER, } = options;
    return new ResourceManagerImpl(createResource, scheduler, maxIdleTime, maxResourcesPerKey, maxTotalResources);
};
