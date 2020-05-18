import { dispose, addTeardown } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { publish } from "./publish.js";
class SharedObservable {
    constructor(source, scheduler, replay) {
        this.source = source;
        this.scheduler = scheduler;
        this.replay = replay;
        this.observerCount = 0;
        this.teardown = () => {
            this.observerCount--;
            if (this.observerCount === 0) {
                dispose(this.multicast);
                this.multicast = none;
            }
        };
        this.isSynchronous = false;
    }
    observe(observer) {
        if (this.observerCount === 0) {
            this.multicast = pipe(this.source, publish(this.scheduler, this.replay));
        }
        this.observerCount++;
        const multicast = this.multicast;
        multicast.observe(observer);
        addTeardown(observer, this.teardown);
    }
}
export const share = (scheduler, replayCount = 0) => observable => new SharedObservable(observable, scheduler, replayCount);
