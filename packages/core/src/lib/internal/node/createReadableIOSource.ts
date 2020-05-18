import { Readable } from "stream";
import {
  DisposableValueLike,
  dispose,
  addDisposable,
  addTeardown,
  addDisposableDisposeParentOnChildError,
} from "../../disposable";
import { FlowMode } from "../../flowable";
import { pipe, compose, Factory } from "../../functions";
import { next, complete, IOSourceLike } from "../../io";
import {
  createObservable,
  onNotify,
  subscribe,
  using,
  ObservableLike,
  dispatchTo,
  dispatch,
} from "../../observable";
import { SchedulerLike } from "../../scheduler";
import { createStreamable } from "../../streamable";

const createReadableEventsObservable = (
  readable: DisposableValueLike<Readable>,
) =>
  createObservable(dispatcher => {
    const readableValue = readable.value;

    const onData = compose(next, dispatchTo(dispatcher));
    readableValue.on("data", onData);

    const onEnd = () => {
      dispatch(dispatcher, complete());
      dispose(dispatcher);
    };
    readableValue.on("end", onEnd);

    addDisposable(readable, dispatcher);
    addTeardown(dispatcher, _ => {
      readableValue.removeListener("data", onData);
      readableValue.removeListener("end", onEnd);
    });
  });

const createReadableAndSetupModeSubscription = (
  factory: Factory<DisposableValueLike<Readable>>,
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

  addDisposableDisposeParentOnChildError(readable, modeSubscription);

  return readable;
};

export const createReadableIOSource = (
  factory: Factory<DisposableValueLike<Readable>>,
): IOSourceLike<Uint8Array> =>
  createStreamable(mode =>
    using(
      createReadableAndSetupModeSubscription(factory, mode),
      createReadableEventsObservable,
    ),
  );
