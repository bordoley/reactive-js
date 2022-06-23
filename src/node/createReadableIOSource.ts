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
import { createObservableUnsafe, dispatchTo, subscribe } from "../observable";
import { toDispatcher } from "../observable/toDispatcher";
import { FlowableLike, createStreamable } from "../streamable";
import { createDisposableNodeStream } from "./nodeStream";

export const createReadableIOSource = (
  factory: Factory<DisposableValueLike<Readable>>,
): FlowableLike<Uint8Array> =>
  createStreamable(mode =>
    createObservableUnsafe(observer => {
      const dispatcher = toDispatcher(observer);

      const readable = factory();
      const readableValue = readable.value;
      readableValue.pause();

      const modeSubscription = pipe(
        mode,
        subscribe(observer, ev => {
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
      addDisposable(observer, readable);

      addDisposableDisposeParentOnChildError(readable, modeSubscription);

      const onData = dispatchTo(dispatcher);
      const onEnd = () => {
        pipe(dispatcher, dispose());
      };

      readableValue.on("data", onData);
      readableValue.on("end", onEnd);

      addDisposable(readable, dispatcher);
      addTeardown(dispatcher, _ => {
        readableValue.removeListener("data", onData);
        readableValue.removeListener("end", onEnd);
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
