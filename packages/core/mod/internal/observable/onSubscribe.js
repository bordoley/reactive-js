class OnSubscribeObservable {
    constructor(src, f) {
        this.src = src;
        this.f = f;
        this.isSynchronous = false;
    }
    subscribe(subscriber) {
        try {
            this.src.subscribe(subscriber);
            const disposable = this.f();
            if (disposable) {
                subscriber.add(disposable);
            }
        }
        catch (cause) {
            subscriber.dispose({ cause });
        }
    }
}
export const onSubscribe = (f) => observable => new OnSubscribeObservable(observable, f);
