import fs from "fs";
import { Readable } from "stream";
import {
  DisposableValueLike,
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  dispose,
} from "../disposable";
import { FlowMode } from "../flowable";
import { Factory, compose, pipe } from "../functions";
import { IOSourceLike, done, notify } from "../io";
import {
  ObservableLike,
  createObservable,
  dispatchTo,
  onNotify,
  subscribe,
  using,
} from "../observable";

import { SchedulerLike } from "../scheduler";
import { createStreamable } from "../streamable";
import { createDisposableNodeStream } from "./nodeStream";

const createReadableEventsObservable = (
  readable: DisposableValueLike<Readable>,
) =>
  createObservable(dispatcher => {
    const readableValue = readable.value;

    const onData = compose(notify, dispatchTo(dispatcher));
    readableValue.on("data", onData);

    const onEnd = () => {
      dispatcher.dispatch(done());
      pipe(dispatcher, dispose());
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

export const readFileIOSource = (
  path: fs.PathLike,
  options?: {
    readonly flags?: string;
    readonly mode?: number;
    readonly start?: number;
    readonly end?: number;
    readonly highWaterMark?: number;
  },
) =>
  createReadableIOSource(() =>
    pipe(fs.createReadStream(path, options), createDisposableNodeStream),
  );
