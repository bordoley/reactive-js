import iconv from "iconv-lite";
import { Transform } from "stream";
import { DisposableValueLike } from "@reactive-js/core/dist/js/disposable";
import {
  using,
  catchError,
  throws,
  subscribe,
  onNotify,
  withLatestFrom,
  compute,
  concatMap,
  fromIterator,
} from "@reactive-js/core/dist/js/observable";
import { Option } from "@reactive-js/core/dist/js/option";
import { createBufferFlowableFromReadable } from "./bufferFlowable";
import { createBufferFlowableSinkFromWritable } from "./bufferFlowableSink";
import {
  Operator,
  pipe,
  compose,
  returns,
} from "@reactive-js/core/dist/js/functions";
import { BufferFlowableLike } from "./interfaces";
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
  createStreamable(modeObs =>
    using(
      scheduler => {
        const transform = factory();

        const transformSink = createBufferFlowableSinkFromWritable(
          returns(transform),
          false,
        );

        const sinkSubscription = pipe(
          sink(src, transformSink),
          subscribe(scheduler),
        );

        const transformReadableStream = createBufferFlowableFromReadable(
          returns(transform),
        ).stream(scheduler);

        const modeSubscription = pipe(
          modeObs,
          onNotify(mode => transformReadableStream.dispatch(mode)),
          subscribe(scheduler),
        );

        return transformReadableStream
          .add(sinkSubscription)
          .add(transform)
          .add(modeSubscription);
      },
      t => t,
    ),
  );

export const unsupportedEncoding = Symbol("unsupportedEncoding");
const unsupportedEncodingObservable = pipe(
  unsupportedEncoding,
  returns,
  throws,
);
const onError = (e: unknown) =>
  e instanceof Error && e.message.startsWith("Encoding not recognized: ")
    ? unsupportedEncodingObservable
    : throws(returns(e));

const convert = <TA, TB extends { length: number }>(
  getConverter: () => {
    write(a: TA): TB;
    end(): TB;
  },
) => {
  const op = compose(
    withLatestFrom(compute(getConverter), function*(
      ev: FlowEvent<TA>,
      decoder,
    ) {
      switch (ev.type) {
        case FlowEventType.Next: {
          const data = decoder.write(ev.data);
          yield { type: FlowEventType.Next, data };
          break;
        }
        case FlowEventType.Complete: {
          const data: Option<TB> = decoder.end();
          if (isSome(data) && data.length > 0) {
            yield { type: FlowEventType.Next, data };
          }

          yield { type: FlowEventType.Complete };
          break;
        }
      }
    }),
    concatMap(compose(returns, fromIterator)),
    catchError(onError),
  );

  return lift(op);
};

export const encode = (
  charset: string,
): Operator<FlowableLike<string>, BufferFlowableLike> =>
  convert(() => (iconv as any).getEncoder(charset));

export const decode = (
  charset: string,
): Operator<BufferFlowableLike, FlowableLike<string>> =>
  convert(() => (iconv as any).getDecoder(charset));
