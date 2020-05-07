import { alwaysFalse } from "../../functions.js";
import { createDelayedScheduledObservable } from "./observable.js";
import { AbstractProducer } from "./producer.js";
class FromScheduledValuesProducer extends AbstractProducer {
    constructor(subscriber, values) {
        super(subscriber);
        this.values = values;
        this.index = 0;
    }
    produce(shouldYield) {
        const values = this.values;
        const length = values.length;
        let index = this.index;
        let isDisposed = this.isDisposed;
        shouldYield = shouldYield ?? alwaysFalse;
        while (index < length && !isDisposed) {
            const [, value] = values[index];
            this.notify(value);
            index++;
            const shouldYieldDueToDelay = index < length && values[index][0] > 0;
            isDisposed = this.isDisposed;
            if (index < length &&
                !isDisposed &&
                (shouldYieldDueToDelay || shouldYield())) {
                this.index = index;
                return values[index][0];
            }
        }
        return -1;
    }
}
export function fromScheduledValues(...values) {
    const factory = (subscriber) => new FromScheduledValuesProducer(subscriber, values);
    const [delay] = values[0];
    return createDelayedScheduledObservable(factory, delay);
}
