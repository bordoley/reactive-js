import { dispose, add } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { publish } from "./publish.js";
class SharedObservable {
    constructor(source, scheduler, replay) {
        this.source = source;
        this.scheduler = scheduler;
        this.replay = replay;
        this.subscriberCount = 0;
        this.teardown = () => {
            this.subscriberCount--;
            if (this.subscriberCount === 0) {
                dispose(this.multicast);
                this.multicast = none;
            }
        };
        this.isSynchronous = false;
    }
    subscribe(subscriber) {
        if (this.subscriberCount === 0) {
            this.multicast = pipe(this.source, publish(this.scheduler, this.replay));
        }
        this.subscriberCount++;
        const multicast = this.multicast;
        multicast.subscribe(subscriber);
        add(subscriber, this.teardown);
    }
}
export const share = (scheduler, replayCount = 0) => observable => new SharedObservable(observable, scheduler, replayCount);
