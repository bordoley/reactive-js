import iconv from "iconv-lite";
import { Transform } from "stream";
import {
  createAsyncEnumerable,
  StreamEvent,
  StreamOperator,
  StreamLike,
  lift,
  StreamEventType,
  sink,
} from "@reactive-js/async-enumerable";
import { createDisposableValue, DisposableValueLike } from "@reactive-js/disposable";
import {
  ObservableLike,
  createObservable,
  using,
  catchError,
  throws,
  genMap,
  subscribe,
} from "@reactive-js/observable";
import { Option } from "@reactive-js/option";
import { createBufferStreamFromReadable } from "./bufferStream";
import { createBufferStreamSinkFromWritable } from "./bufferStreamSink";
import { Operator, pipe } from "@reactive-js/pipe";
import { BufferStreamLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { isSome } from "@reactive-js/option";

export const transform = (
  factory: () => DisposableValueLike<Transform>,
): StreamOperator<Buffer, Buffer> => src =>
  createAsyncEnumerable(modeObs =>
    createObservable<StreamEvent<Buffer>>(subscriber => {
      const transform = factory();

      const transformSink = createBufferStreamSinkFromWritable(
        () => transform,
        false,
      );
      const sinkSubscription = pipe(
        sink(src, transformSink),
        subscribe(subscriber),
      );

      const transformReadableEnumerator = createBufferStreamFromReadable(
        () => transform,
      ).enumerateAsync(subscriber);
      transformReadableEnumerator.subscribe(subscriber);
      modeObs.subscribe(transformReadableEnumerator);

      subscriber.add(transform).add(sinkSubscription);
    }),
  );

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
          genMap(function*(ev) {
            switch (ev.type) {
              case StreamEventType.Next: {
                const data = encoder.value.write(ev.data);
                yield { type: StreamEventType.Next, data };
                break;
              }
              case StreamEventType.Complete: {
                const data: Option<Buffer> = encoder.value.end();
                if (isSome(data) && data.length > 0) {
                  yield { type: StreamEventType.Next, data };
                }

                yield { type: StreamEventType.Complete };
                break;
              }
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
          genMap(function*(ev) {
            switch (ev.type) {
              case StreamEventType.Next: {
                const data = decoder.value.write(ev.data);
                yield { type: StreamEventType.Next, data };
                break;
              }
              case StreamEventType.Complete: {
                const data: Option<Buffer> = decoder.value.end();
                if (isSome(data) && data.length > 0) {
                  yield { type: StreamEventType.Next, data };
                }

                yield { type: StreamEventType.Complete };
                break;
              }
            }
          }),
        ),
      ),
      catchError(onError),
    );

  return lift(mapObs);
};
