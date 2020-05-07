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
        for (const resource of resourcesArray) {
            subscriber.add(resource);
            resource.add(subscriber);
        }
        observableFactory(...resourcesArray).subscribe(subscriber);
    }
}
export function using(resourceFactory, observableFactory) {
    return new UsingObservable(resourceFactory, observableFactory);
}
