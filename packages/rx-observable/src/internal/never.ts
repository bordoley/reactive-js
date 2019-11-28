import { SubscriberLike } from "@reactive-js/rx-subscriber";
import { ObservableLike } from "./observable";

class NeverObservable<T> implements ObservableLike<T> {
  subscribe(_: SubscriberLike<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();
export const never = <T>() => neverInstance as ObservableLike<T>;
