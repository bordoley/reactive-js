import fs from "fs";
import { Readable } from "stream";
import {
  DisposableValueLike,
  addDisposable,
  addDisposableDisposeParentOnChildError,
  addTeardown,
  dispose,
} from "../disposable";
import { Factory, pipe } from "../functions";
import {
  createObservable,
  createObservableWithScheduler,
  dispatchTo,
  subscribe,
} from "../observable";
import { FlowableLike, createStreamable } from "../streamable";
import { createDisposableNodeStream } from "./nodeStream";

export const createReadableIOSource = (
  factory: Factory<DisposableValueLike<Readable>>,
): FlowableLike<Uint8Array> =>
  createStreamable(mode =>
    createObservableWithScheduler(scheduler => {
      const readable = factory();
      const readableValue = readable.value;
      readableValue.pause();

      const modeSubscription = pipe(
        mode,
        subscribe(scheduler, ev => {
          switch (ev) {
            case "pause":
              readableValue.pause();
              break;
            case "resume":
              readableValue.resume();
              break;
          }
        }),
      );
      scheduler.add(readable);

      addDisposableDisposeParentOnChildError(readable, modeSubscription);

      return createObservable(dispatcher => {
        const readableValue = readable.value;

        const onData = dispatchTo(dispatcher);
        readableValue.on("data", onData);

        const onEnd = () => {
          pipe(dispatcher, dispose());
        };
        readableValue.on("end", onEnd);

        addDisposable(readable, dispatcher);
        addTeardown(dispatcher, _ => {
          readableValue.removeListener("data", onData);
          readableValue.removeListener("end", onEnd);
        });
      });
    }),
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
