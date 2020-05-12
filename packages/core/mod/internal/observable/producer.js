import { AbstractSchedulerContinuation } from "../../scheduler.js";
import { add } from "../../disposable.js";
export class AbstractProducer extends AbstractSchedulerContinuation {
    constructor(subscriber) {
        super();
        this.subscriber = subscriber;
        add(this, subscriber);
    }
    notify(next) {
        this.subscriber.notify(next);
    }
}
