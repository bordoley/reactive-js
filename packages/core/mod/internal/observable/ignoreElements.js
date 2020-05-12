import { add } from "../../disposable.js";
import { lift } from "./lift.js";
import { AbstractDelegatingSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class IgnoreSubscriber extends AbstractDelegatingSubscriber {
    constructor(delegate) {
        super(delegate);
        add(this, delegate);
    }
    notify(_) {
        assertSubscriberNotifyInContinuation(this);
    }
}
const operator = (subscriber) => new IgnoreSubscriber(subscriber);
operator.isSynchronous = true;
export const ignoreElements = () => lift(operator);
