import { dispose, addTeardown } from "../../disposable.js";
import { pipe } from "../../functions.js";
import { none } from "../../option.js";
import { observe } from "./observable.js";
import { publish } from "./publish.js";
class SharedObservable {
    constructor(source, publish) {
        this.source = source;
        this.publish = publish;
        this.observerCount = 0;
        this.teardown = () => {
            this.observerCount--;
            if (this.observerCount === 0) {
                pipe(this.multicast, dispose());
                this.multicast = none;
            }
        };
        this.isSynchronous = false;
    }
    observe(observer) {
        if (this.observerCount === 0) {
            this.multicast = pipe(this.source, this.publish);
        }
        this.observerCount++;
        const multicast = this.multicast;
        pipe(multicast, observe(observer));
        addTeardown(observer, this.teardown);
    }
}
export const share = (scheduler, options) => observable => new SharedObservable(observable, publish(scheduler, options));
