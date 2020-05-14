import { add, disposeOnError } from "../../disposable.js";
class UsingObservable {
    constructor(resourceFactory, observableFactory) {
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
        this.isSynchronous = false;
    }
    observe(observer) {
        const resources = this.resourceFactory(observer);
        const observableFactory = this.observableFactory;
        const resourcesArray = Array.isArray(resources) ? resources : [resources];
        add(observer, ...resourcesArray);
        observableFactory(...resourcesArray).observe(observer);
        const teardownObserverOnError = disposeOnError(observer);
        for (const r of resourcesArray) {
            add(r, teardownObserverOnError);
        }
    }
}
export function using(resourceFactory, observableFactory) {
    return new UsingObservable(resourceFactory, observableFactory);
}
