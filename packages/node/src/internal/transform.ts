import { Transform } from "stream";
import {
  AsyncEnumerableOperatorLike,
  createAsyncEnumerable,
} from "@reactive-js/async-enumerable";
import {
  ReadableEvent,
  ReadableMode,
  createReadableAsyncEnumerator,
} from "./readable";
import { createWritableAsyncEnumerator } from "./writable";
import { ObservableLike, createObservable } from "@reactive-js/observable";

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

      subscriber
        .add(() => transform.destroy())
        .add(transformWritableEnumerator)
        .add(transformReadableEnumerator)
        .add(srcEnumerator);

      // sink the src into the transform
      transformWritableEnumerator.subscribe(srcEnumerator);
      srcEnumerator.subscribe(transformWritableEnumerator);

      // Since the transform into the subcriber
      modeObs.subscribe(transformReadableEnumerator);
      transformReadableEnumerator.subscribe(subscriber);
    });

  return createAsyncEnumerable(op);
};
