class OnSubscribeObservable {
    constructor(src, f) {
        this.src = src;
        this.f = f;
        this.isSynchronous = false;
    }
    subscribe(subscriber) {
        try {
            this.src.subscribe(subscriber);
            this.f(subscriber);
        }
        catch (cause) {
            subscriber.dispose({ cause });
        }
    }
}
export const onSubscribe = (f) => observable => new OnSubscribeObservable(observable, f);
