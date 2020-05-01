import { Readable } from "stream";
import { FlowEventType, FlowMode, FlowableLike } from "@reactive-js/core/dist/js/flowable";
import { createStreamable } from "@reactive-js/core/dist/js/streamable";
import { DisposableValueLike } from "@reactive-js/core/dist/js/disposable";
import {
  createObservable,
  onNotify,
  subscribe,
  using,
  ObservableLike,
} from "@reactive-js/core/dist/js/observable";
import { pipe } from "@reactive-js/core/dist/js/functions";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";

const createReadableEventsObservable = (
  readable: Readable,
) => createObservable(dispatcher => {
    const onData = (data: Uint8Array) => {
      dispatcher.dispatch({ type: FlowEventType.Next, data });
    };
    readable.on("data", onData);

    const onEnd = () => {
      dispatcher.dispatch({ type: FlowEventType.Complete });
      dispatcher.dispose();
    };
    readable.on("end", onEnd);
  });

const createReadableAndSetupModeSubscription = (
  factory: () => DisposableValueLike<Readable>,
  mode: ObservableLike<FlowMode>,
) => (scheduler: SchedulerLike) => {
  const readable = factory();
  readable.value.pause();

  const modeSubscription = pipe(
    mode,
    onNotify(ev => {
      switch (ev) {
        case FlowMode.Pause:
          readable.value.pause();
          break;
        case FlowMode.Resume:
          readable.value.resume();
          break;
      }
    }),
    subscribe(scheduler),
  );

  return readable.add(modeSubscription);
};

export const createFlowableFromReadable = (
  factory: () => DisposableValueLike<Readable>,
): FlowableLike<Uint8Array> =>
  createStreamable(mode =>
    using(
      createReadableAndSetupModeSubscription(factory, mode),
      disp => createReadableEventsObservable(disp.value),
    ),
  );
