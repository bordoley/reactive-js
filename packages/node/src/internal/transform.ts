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
import { createDisposableValue } from "@reactive-js/disposable";
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
import { createBufferStreamFromReadable } from "./bufferStream";
import { createBufferStreamSinkFromWritable } from "./bufferStreamSink";
import { Operator, pipe } from "@reactive-js/pipe";
import { BufferStreamLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/scheduler";
import { isSome } from "@reactive-js/option";

const disposeTransform = (readable: Transform) => {
  readable.removeAllListeners();
  readable.destroy();
};

export const transform = (
  factory: () => Transform,
): StreamOperator<Buffer, Buffer> => src =>
  createAsyncEnumerable(modeObs =>
    createObservable<StreamEvent<Buffer>>(subscriber => {
      const readable = createDisposableValue(factory(), disposeTransform);
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

      subscriber.add(readable).add(sinkSubscription);
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
          concatMap(ev => {
            switch (ev.type) {
              case StreamEventType.Next: {
                const data = encoder.value.write(ev.data);
                return ofValue({ type: StreamEventType.Next, data });
              }
              case StreamEventType.Complete: {
                const data: Option<Buffer> = encoder.value.end();
                return isSome(data) && data.length > 0
                  ? fromArray([
                      { type: StreamEventType.Next, data },
                      { type: StreamEventType.Complete },
                    ])
                  : ofValue({ type: StreamEventType.Complete });
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
          concatMap(ev => {
            switch (ev.type) {
              case StreamEventType.Next: {
                const data = decoder.value.write(ev.data);
                return ofValue({ type: StreamEventType.Next, data });
              }
              case StreamEventType.Complete: {
                const data: Option<Buffer> = decoder.value.end();
                return isSome(data) && data.length > 0
                  ? fromArray([
                      { type: StreamEventType.Next, data },
                      { type: StreamEventType.Complete },
                    ])
                  : ofValue({ type: StreamEventType.Complete });
              }
            }
          }),
        ),
      ),
      catchError(onError),
    );

  return lift(mapObs);
};
