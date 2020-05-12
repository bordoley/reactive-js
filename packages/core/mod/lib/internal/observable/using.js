import { add } from "../../disposable.js";
class UsingObservable {
    constructor(resourceFactory, observableFactory) {
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
        this.isSynchronous = false;
    }
    subscribe(subscriber) {
        const resources = this.resourceFactory(subscriber);
        const observableFactory = this.observableFactory;
        const resourcesArray = Array.isArray(resources) ? resources : [resources];
        add(subscriber, ...resourcesArray);
        observableFactory(...resourcesArray).subscribe(subscriber);
    }
}
export function using(resourceFactory, observableFactory) {
    return new UsingObservable(resourceFactory, observableFactory);
}
