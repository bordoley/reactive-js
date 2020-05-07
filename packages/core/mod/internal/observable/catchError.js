import { AbstractDelegatingSubscriber } from "./subscriber.js";
import { lift } from "./lift.js";
import { isSome } from "../../option.js";
class CatchErrorSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate, onError) {
        super(delegate);
        this.add(error => {
            if (isSome(error)) {
                try {
                    const { cause } = error;
                    const result = onError(cause);
                    if (isSome(result)) {
                        result.subscribe(delegate);
                    }
                    else {
                        delegate.dispose();
                    }
                }
                catch (cause) {
                    delegate.dispose({ cause, parent: error });
                }
            }
            else {
                delegate.dispose();
            }
        });
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
export const catchError = (onError) => {
    const operator = (subscriber) => new CatchErrorSubscriber(subscriber, onError);
    operator.isSynchronous = false;
    return lift(operator);
};
