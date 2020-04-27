import { Readable } from "stream";
import { FlowEventType, FlowMode } from "@reactive-js/core/dist/js/flowable";
import { createStreamable } from "@reactive-js/core/dist/js/streamable";
import { DisposableValueLike } from "@reactive-js/core/dist/js/disposable";
import {
  createObservable,
  onNotify,
  subscribe,
  using,
  ObservableLike,
} from "@reactive-js/core/dist/js/observable";
import { pipe } from "@reactive-js/core/dist/js/pipe";
import { BufferFlowableLike } from "./interfaces";
import { SchedulerLike } from "@reactive-js/core/dist/js/scheduler";

const createReadableEventsObservable = (
  readable: DisposableValueLike<Readable>,
) =>
  createObservable(dispatcher => {
    const onData = (data: Buffer) => {
      dispatcher.dispatch({ type: FlowEventType.Next, data });
    };
    readable.value.on("data", onData);

    const onEnd = () => {
      dispatcher.dispatch({ type: FlowEventType.Complete });
      readable.dispose();
    };
    readable.value.on("end", onEnd);

    const onError = (cause: any) => {
      dispatcher.dispose({ cause });
    };
    readable.value.on("error", onError);
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

export const createBufferFlowableFromReadable = (
  factory: () => DisposableValueLike<Readable>,
): BufferFlowableLike =>
  createStreamable(mode =>
    using(
      createReadableAndSetupModeSubscription(factory, mode),
      createReadableEventsObservable,
    ),
  );
