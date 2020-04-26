import iconv from "iconv-lite";
import { Transform } from "stream";
import {
  createDisposableValue,
  DisposableValueLike,
} from "@reactive-js/core/dist/js/disposable";
import {
  ObservableLike,
  using,
  catchError,
  throws,
  genMap,
  subscribe,
  onNotify,
} from "@reactive-js/core/dist/js/observable";
import { Option } from "@reactive-js/core/dist/js/option";
import { createBufferFlowableFromReadable } from "./bufferFlowable";
import { createBufferFlowableSinkFromWritable } from "./bufferFlowableSink";
import { Operator, pipe } from "@reactive-js/core/dist/js/pipe";
import { BufferFlowableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";
import { isSome } from "@reactive-js/core/dist/js/option";
import {
  FlowableOperator,
  FlowEvent,
  FlowableLike,
  FlowEventType,
} from "@reactive-js/core/dist/js/flowable";
import {
  createStreamable,
  sink,
  lift,
} from "@reactive-js/core/dist/js/streamable";

export const transform = (
  factory: () => DisposableValueLike<Transform>,
): FlowableOperator<Buffer, Buffer> => src =>
  createStreamable(modeObs => using(
    scheduler => {
      const transform = factory();

      const transformSink = createBufferFlowableSinkFromWritable(
        () => transform,
        false,
      );

      const sinkSubscription = pipe(
        sink(src, transformSink),
        subscribe(scheduler),
      );

      const transformReadableStream = createBufferFlowableFromReadable(
        () => transform,
      ).stream(scheduler);

      const modeSubscription = pipe(modeObs, onNotify(mode => transformReadableStream.dispatch(mode)), subscribe(scheduler));

      return transformReadableStream.add(sinkSubscription).add(transform).add(modeSubscription);
    },
    t => t
  ));

export const unsupportedEncoding = Symbol("unsupportedEncoding");
const unsupportedEncodingObservable = throws(() => unsupportedEncoding);
const onError = (e: unknown) =>
  e instanceof Error && e.message.startsWith("Encoding not recognized: ")
    ? unsupportedEncodingObservable
    : throws(() => e);

export const encode = (
  charset: string,
): Operator<FlowableLike<string>, BufferFlowableLike> => {
  const createEncoder = (_: SchedulerLike) =>
    createDisposableValue((iconv as any).getEncoder(charset), _ => {});

  const mapObs = (obs: ObservableLike<FlowEvent<string>>) =>
    pipe(
      using(createEncoder, encoder =>
        pipe(
          obs,
          genMap(function*(ev) {
            switch (ev.type) {
              case FlowEventType.Next: {
                const data = encoder.value.write(ev.data);
                yield { type: FlowEventType.Next, data };
                break;
              }
              case FlowEventType.Complete: {
                const data: Option<Buffer> = encoder.value.end();
                if (isSome(data) && data.length > 0) {
                  yield { type: FlowEventType.Next, data };
                }

                yield { type: FlowEventType.Complete };
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
): Operator<BufferFlowableLike, FlowableLike<string>> => {
  const createDecoder = (_: SchedulerLike) =>
    createDisposableValue((iconv as any).getDecoder(charset), _ => {});

  const mapObs = (obs: ObservableLike<FlowEvent<Buffer>>) =>
    pipe(
      using(createDecoder, decoder =>
        pipe(
          obs,
          genMap(function*(ev) {
            switch (ev.type) {
              case FlowEventType.Next: {
                const data = decoder.value.write(ev.data);
                yield { type: FlowEventType.Next, data };
                break;
              }
              case FlowEventType.Complete: {
                const data: Option<Buffer> = decoder.value.end();
                if (isSome(data) && data.length > 0) {
                  yield { type: FlowEventType.Next, data };
                }

                yield { type: FlowEventType.Complete };
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
