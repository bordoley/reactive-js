import { Transform } from "stream";
import {
  AsyncEnumerableOperatorLike,
  createAsyncEnumerable,
} from "@reactive-js/async-enumerable";
import { createDisposable } from "@reactive-js/disposable";
import { ObservableLike, createObservable } from "@reactive-js/observable";
import {
  ReadableEvent,
  ReadableMode,
  createReadableAsyncEnumerator,
} from "./readable";
import { createWritableAsyncEnumerator } from "./writable";

export const transform = (
  factory: () => Transform,
): AsyncEnumerableOperatorLike<
  ReadableMode,
  ReadableEvent,
  ReadableMode,
  ReadableEvent
> => src => {
  const op = (modeObs: ObservableLike<ReadableMode>) =>
    createObservable<ReadableEvent>(subscriber => {
      const transform = factory();

      const transformWritableEnumerator = createWritableAsyncEnumerator(
        transform,
        subscriber,
      );
      const transformReadableEnumerator = createReadableAsyncEnumerator(
        transform,
        subscriber,
      );

      const srcEnumerator = src.enumerateAsync(subscriber);

      // When a tranform's read interface has been fully consumed
      // we can dispose the transform, its writableEnumerator
      // and its upstream sources, but must not dispose the readableEnumerator.
      const tranformDisposable = createDisposable(() => {
        transform.removeListener("end", onEnd);
        transform.destroy();
      })
        .add(srcEnumerator)
        .add(transformWritableEnumerator);

      const onEnd = () => {
        tranformDisposable.dispose();
      };
      transform.on("end", onEnd);

      subscriber.add(transformReadableEnumerator).add(tranformDisposable);

      // sink the src into the transform
      transformWritableEnumerator.subscribe(srcEnumerator);
      srcEnumerator.subscribe(transformWritableEnumerator);

      // Since the transform into the subcriber
      modeObs.subscribe(transformReadableEnumerator);
      transformReadableEnumerator.subscribe(subscriber);
    });

  return createAsyncEnumerable(op);
};
