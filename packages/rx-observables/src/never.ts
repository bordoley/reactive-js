import { 
  ObservableLike,
  SubscriberLike, 
} from '@rx-min/rx-core';

class NeverObservable<T> implements ObservableLike<T> {
  subscribe(subscriber: SubscriberLike<T>) {
  }
}

const neverInstance: ObservableLike<any> = new NeverObservable();
export const never = <T>() => (neverInstance as ObservableLike<T>);