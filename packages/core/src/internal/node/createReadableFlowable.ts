import { Readable } from "stream";
import { DisposableValueLike, dispose } from "../../disposable";
import { FlowMode, FlowableLike, next, complete } from "../../flowable";
import { pipe, compose } from "../../functions";
import {
  createObservable,
  onNotify,
  subscribe,
  using,
  ObservableLike,
  dispatchTo,
} from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { createStreamable } from "../../streamable";

const createReadableEventsObservable = (
  readable: DisposableValueLike<Readable>,
) =>
  createObservable(dispatcher => {
    readable.add(dispatcher);
    const readableValue = readable.value;

    const onData = compose(next, dispatchTo(dispatcher));
    readableValue.on("data", onData);

    const onEnd = () => {
      dispatcher.dispatch(complete());
      dispose(dispatcher);
    };
    readableValue.on("end", onEnd);

    dispatcher.add(_ => {
      readableValue.removeListener("data", onData);
      readableValue.removeListener("end", onEnd);
    });
  });

const createReadableAndSetupModeSubscription = (
  factory: () => DisposableValueLike<Readable>,
  mode: ObservableLike<FlowMode>,
) => (scheduler: SchedulerLike) => {
  const readable = factory();
  const readableValue = readable.value;
  readableValue.pause();

  const modeSubscription = pipe(
    mode,
    onNotify(ev => {
      switch (ev) {
        case FlowMode.Pause:
          readableValue.pause();
          break;
        case FlowMode.Resume:
          readableValue.resume();
          break;
      }
    }),
    subscribe(scheduler),
  );

  return readable.add(modeSubscription);
};

export const createReadableFlowable = (
  factory: () => DisposableValueLike<Readable>,
): FlowableLike<Uint8Array> =>
  createStreamable(mode =>
    using(
      createReadableAndSetupModeSubscription(factory, mode),
      createReadableEventsObservable,
    ),
  );
