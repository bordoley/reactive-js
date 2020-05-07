import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { createSubject } from "./createSubject.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
class SharedObservable {
    constructor(factory, source, scheduler) {
        this.factory = factory;
        this.source = source;
        this.scheduler = scheduler;
        this.subscriberCount = 0;
        this.teardown = () => {
            this.subscriberCount--;
            if (this.subscriberCount === 0) {
                this.subject.dispose();
                this.subject = none;
            }
        };
        this.isSynchronous = false;
        this.onNotify = (next) => this.subject.dispatch(next);
    }
    subscribe(subscriber) {
        if (this.subscriberCount === 0) {
            this.subject = this.factory();
            this.subject.add(pipe(this.source, onNotify(this.onNotify), subscribe(this.scheduler)));
        }
        this.subscriberCount++;
        const subject = this.subject;
        subject.subscribe(subscriber);
        subscriber.add(this.teardown);
    }
}
export const share = (scheduler, replayCount) => {
    const factory = () => createSubject(replayCount);
    return observable => new SharedObservable(factory, observable, scheduler);
};
