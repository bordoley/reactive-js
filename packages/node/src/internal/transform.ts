import { Transform } from "stream";
import {
  createAsyncEnumerable,
  StreamMode,
  StreamEvent,
  StreamOperator,
} from "@reactive-js/async-enumerable";
import { createDisposable } from "@reactive-js/disposable";
import { ObservableLike, createObservable } from "@reactive-js/observable";
import {
  createBufferStreamAsyncEnumeratorFromReadable,
} from "./bufferStream";
import { createBufferStreamSinkAsyncEnumeratorFromWritable } from "./bufferStreamSink";

export const transform = (
  factory: () => Transform,
): StreamOperator<Buffer, Buffer> => src => {
  const op = (modeObs: ObservableLike<StreamMode>) =>
    createObservable<StreamEvent<Buffer>>(subscriber => {
      const transform = factory();

      const transformWritableEnumerator = createBufferStreamSinkAsyncEnumeratorFromWritable(
        transform,
        subscriber,
      );
      const transformReadableEnumerator = createBufferStreamAsyncEnumeratorFromReadable(
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
