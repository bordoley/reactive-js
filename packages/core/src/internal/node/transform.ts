import { Transform } from "stream";
import { DisposableValueLike } from "../../disposable";
import { using, subscribe, onNotify } from "../../observable";
import { createFlowableFromReadable } from "./flowable";
import { createFlowableSinkFromWritable } from "./flowableSink";
import { pipe, returns } from "../../functions";
import { FlowableOperator } from "../../flowable";
import { createStreamable, sink } from "../../streamable";

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
