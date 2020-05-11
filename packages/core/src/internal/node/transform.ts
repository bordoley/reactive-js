import { Transform } from "stream";
import { DisposableValueLike, createDisposableValue } from "../../disposable";
import { FlowableOperator } from "../../flowable";
import { ignore, pipe, returns } from "../../functions";
import { using, subscribe, onNotify } from "../../observable";
import { createStreamable, sink } from "../../streamable";
import { createReadableFlowable } from "./createReadableFlowable";
import { createWritableFlowableSink } from "./createWritableFlowableSink";

export const transform = (
  factory: () => DisposableValueLike<Transform>,
): FlowableOperator<Uint8Array, Uint8Array> => src =>
  createStreamable(modeObs =>
    using(
      scheduler => {
        const transform = factory();

        const transformSink = createWritableFlowableSink(
          // don't dispose the transform when the writable is disposed.
          () => createDisposableValue<Transform>(transform.value, ignore),
        );

        const sinkSubscription = pipe(
          sink(src, transformSink),
          subscribe(scheduler),
        );

        const transformReadableStream = createReadableFlowable(
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
