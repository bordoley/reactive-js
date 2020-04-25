import { AsyncEnumerableLike } from "./interfaces.ts";
import {
  ObservableLike,
  createObservable,
  endWith,
  SubscriberLike,
} from "../../observable.ts";
import { none } from "../../option.ts";
import { pipe } from "../../pipe.ts";

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
