import { ObservableLike } from "@reactive-js/rx-observable";
import { SubscriberLike } from "@reactive-js/rx-subscriber";

class NeverObservable<T> implements ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();
export const never = <T>() => neverInstance as ObservableLike<T>;
