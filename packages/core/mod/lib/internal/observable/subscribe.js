import { AbstractSubscriber, assertSubscriberNotifyInContinuation, } from "./subscriber.js";
class DefaultSubscriber extends AbstractSubscriber {
    notify(_) {
        assertSubscriberNotifyInContinuation(this);
    }
}
export const subscribe = (scheduler) => (observable) => {
    const subscriber = new DefaultSubscriber(scheduler);
    observable.subscribe(subscriber);
    return subscriber;
};
