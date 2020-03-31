import { AsyncEnumerableLike } from "./interfaces";
import {
  ObservableLike,
  createObservable,
  endWith,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";

export const sink = <TReq, T>(
  src: AsyncEnumerableLike<TReq, T>,
  dest: AsyncEnumerableLike<T, TReq>,
): ObservableLike<void> =>
  pipe(
    createObservable<void>(subscriber => {
      const destEnumerator = dest.enumerateAsync(subscriber);
      const srcEnumerator = src.enumerateAsync(subscriber);

      srcEnumerator.subscribe(destEnumerator);
      destEnumerator.subscribe(srcEnumerator);

      subscriber.add(destEnumerator).add(srcEnumerator);
      destEnumerator.add(subscriber);
    }),
    endWith(undefined as void),
  );
