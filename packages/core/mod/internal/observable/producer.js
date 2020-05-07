import { AbstractSchedulerContinuation } from "../../scheduler.js";
export class AbstractProducer extends AbstractSchedulerContinuation {
    constructor(subscriber) {
        super();
        this.subscriber = subscriber;
        this.add(subscriber);
    }
    notify(next) {
        this.subscriber.notify(next);
    }
}
