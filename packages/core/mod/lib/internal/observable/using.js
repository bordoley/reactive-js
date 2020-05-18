import { addDisposableDisposeParentOnChildError } from "../../disposable.js";
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
        for (const r of resourcesArray) {
            addDisposableDisposeParentOnChildError(observer, r);
        }
        observableFactory(...resourcesArray).observe(observer);
    }
}
export function using(resourceFactory, observableFactory) {
    return new UsingObservable(resourceFactory, observableFactory);
}
