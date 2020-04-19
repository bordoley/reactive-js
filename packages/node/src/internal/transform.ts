import iconv from "iconv-lite";
import { Transform } from "stream";
import {
  createAsyncEnumerable,
  StreamMode,
  StreamEvent,
  StreamOperator,
  StreamLike,
  lift,
  StreamEventType,
  sink,
} from "@reactive-js/async-enumerable";
import {
  createDisposable,
  createDisposableValue,
} from "@reactive-js/disposable";
import {
  ObservableLike,
  createObservable,
  using,
  catchError,
  throws,
  concatMap,
  ofValue,
  fromArray,
  subscribe,
} from "@reactive-js/observable";
import { Option } from "@reactive-js/option";
import { createBufferStreamAsyncEnumeratorFromReadable } from "./bufferStream";
import { createBufferStreamSinkAsyncEnumeratorFromWritable } from "./bufferStreamSink";
import { Operator, pipe } from "@reactive-js/pipe";
import { BufferStreamLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { isSome } from "@reactive-js/option";

export const transform = (
  factory: () => Transform,
): StreamOperator<Buffer, Buffer> => src => {
  const op = (modeObs: ObservableLike<StreamMode>) =>
    createObservable<StreamEvent<Buffer>>(subscriber => {
      const transform = factory();

      const transformSink = {
        enumerateAsync: (scheduler: SchedulerLike, replayCount?: number) =>
          createBufferStreamSinkAsyncEnumeratorFromWritable(
            transform,
            scheduler,
            replayCount,
          ),
      };

      const transformReadableEnumerator = createBufferStreamAsyncEnumeratorFromReadable(
        transform,
        subscriber,
      );

      const sinkSubscription = pipe(
        sink(src, transformSink),
        subscribe(subscriber),
      );

      // When a tranform's read interface has been fully consumed
      // we can dispose the transform, its writableEnumerator
      // and its upstream sources, but must not dispose the readableEnumerator.
      const tranformDisposable = createDisposable(() => {
        transform.removeListener("end", onEnd);
        transform.destroy();
      }).add(sinkSubscription);

      const onEnd = () => {
        tranformDisposable.dispose();
      };
      transform.on("end", onEnd);

      subscriber.add(transformReadableEnumerator).add(tranformDisposable);

      // Since the transform into the subcriber
      modeObs.subscribe(transformReadableEnumerator);
      transformReadableEnumerator.subscribe(subscriber);
    });

  return createAsyncEnumerable(op);
};

export const unsupportedEncoding = Symbol("unsupportedEncoding");
const unsupportedEncodingObservable = throws(() => unsupportedEncoding);
const onError = (e: unknown) =>
  e instanceof Error && e.message.startsWith("Encoding not recognized: ")
    ? unsupportedEncodingObservable
    : throws(() => e);

export const encode = (
  charset: string,
): Operator<StreamLike<string>, BufferStreamLike> => {
  const createEncoder = (_: SchedulerLike) =>
    createDisposableValue((iconv as any).getEncoder(charset), _ => {});

  const mapObs = (obs: ObservableLike<StreamEvent<string>>) =>
    pipe(
      using(createEncoder, encoder =>
        pipe(
          obs,
          concatMap(ev => {
            if (ev.type === StreamEventType.Next) {
              const data = encoder.value.write(ev.data);
              return ofValue({ type: StreamEventType.Next, data });
            } else {
              const data: Option<Buffer> = encoder.value.end();
              return isSome(data) && data.length > 0
                ? fromArray([
                    { type: StreamEventType.Next, data },
                    { type: StreamEventType.Complete },
                  ])
                : ofValue({ type: StreamEventType.Complete });
            }
          }),
        ),
      ),
      catchError(onError),
    );

  return lift(mapObs);
};

export const decode = (
  charset: string,
): Operator<BufferStreamLike, StreamLike<string>> => {
  const createDecoder = (_: SchedulerLike) =>
    createDisposableValue((iconv as any).getDecoder(charset), _ => {});

  const mapObs = (obs: ObservableLike<StreamEvent<Buffer>>) =>
    pipe(
      using(createDecoder, decoder =>
        pipe(
          obs,
          concatMap(ev => {
            if (ev.type === StreamEventType.Next) {
              const data = decoder.value.write(ev.data);
              return ofValue({ type: StreamEventType.Next, data });
            } else {
              const data: Option<string> = decoder.value.end();
              return isSome(data) && data.length > 0
                ? fromArray([
                    { type: StreamEventType.Next, data },
                    { type: StreamEventType.Complete },
                  ])
                : ofValue({ type: StreamEventType.Complete });
            }
          }),
        ),
      ),
      catchError(onError),
    );

  return lift(mapObs);
};
