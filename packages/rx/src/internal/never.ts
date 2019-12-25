import { ObservableLike, SubscriberLike } from "./interfaces";

class NeverObservable<T> implements ObservableLike<T> {
  subscribe(_: SubscriberLike<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();
export const never = <T>() => neverInstance as ObservableLike<T>;
