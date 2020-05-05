import { Transform } from "stream.ts";
import { DisposableValueLike } from "../../disposable.ts";
import {
  using,
  subscribe,
  onNotify,
} from "../../observable.ts";
import { createFlowableFromReadable } from "./flowable.ts";
import { createFlowableSinkFromWritable } from "./flowableSink.ts";
import { pipe, returns } from "../../functions.ts";
import { FlowableOperator } from "../../flowable.ts";
import {
  createStreamable,
  sink,
} from "../../streamable.ts";

export const transform = (
  factory: () => DisposableValueLike<Transform>,
): FlowableOperator<Uint8Array, Uint8Array> => src =>
  createStreamable(modeObs =>
    using(
      scheduler => {
        const transform = factory();

        const transformSink = createFlowableSinkFromWritable(
          returns(transform),
          false,
        );

        const sinkSubscription = pipe(
          sink(src, transformSink),
          subscribe(scheduler),
        );

        const transformReadableStream = createFlowableFromReadable(
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
