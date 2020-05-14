import { add } from "../../disposable.js";
import { AbstractSchedulerContinuation } from "../../scheduler.js";
export class AbstractProducer extends AbstractSchedulerContinuation {
    constructor(observer) {
        super();
        this.observer = observer;
        add(this, observer);
    }
    notify(next) {
        this.observer.notify(next);
    }
}
