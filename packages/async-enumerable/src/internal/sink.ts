import { AsyncEnumerableLike } from "./interfaces";
import {
  ObservableLike,
  createObservable,
  endWith,
  SubscriberLike,
} from "@reactive-js/observable";
import { none } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";

export const sink = <TReq, T>(
  src: AsyncEnumerableLike<TReq, T>,
  dest: AsyncEnumerableLike<T, TReq>,
): ObservableLike<void> => {
  const onSubscribe = (subscriber: SubscriberLike<void>) => {
    const destEnumerator = dest.enumerateAsync(subscriber);
    const srcEnumerator = src.enumerateAsync(subscriber);

    srcEnumerator.subscribe(destEnumerator);
    destEnumerator.subscribe(srcEnumerator);

    subscriber.add(destEnumerator).add(srcEnumerator);
    destEnumerator.add(subscriber);
  };

  return pipe(onSubscribe, createObservable, endWith(none as void));
};
