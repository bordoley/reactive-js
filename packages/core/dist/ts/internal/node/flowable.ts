import { Readable } from "stream.ts";
import {
  FlowEventType,
  FlowMode,
  FlowableLike,
} from "../../flowable.ts";
import { createStreamable } from "../../streamable.ts";
import { DisposableValueLike } from "../../disposable.ts";
import {
  createObservable,
  onNotify,
  subscribe,
  using,
  ObservableLike,
} from "../../observable.ts";
import { pipe } from "../../functions.ts";
import { SchedulerLike } from "../../scheduler.ts";

const createReadableEventsObservable = (readable: Readable) =>
  createObservable(dispatcher => {
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
    using(createReadableAndSetupModeSubscription(factory, mode), disp =>
      createReadableEventsObservable(disp.value),
    ),
  );
