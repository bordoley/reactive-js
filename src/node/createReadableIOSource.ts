import fs from "fs";
import { Readable } from "stream";
import { dispatchTo } from "../dispatcher";
import { DisposableValueLike, add, addTo, dispose } from "../disposable";
import { Factory, pipe } from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { scheduler } from "../observer";
import { FlowableLike, createLiftedStreamable } from "../streamable";
import { createDisposableNodeStream } from "./nodeStream";

export const createReadableIOSource = (
  factory: Factory<DisposableValueLike<Readable>>,
): FlowableLike<Uint8Array> =>
  createLiftedStreamable(mode =>
    createObservable(observer => {
      const { dispatcher } = observer;

      const readable = pipe(factory(), addTo(observer), add(dispatcher, true));
      const readableValue = readable.value;
      readableValue.pause();

      pipe(
        mode,
        onNotify(ev => {
          switch (ev) {
            case "pause":
              readableValue.pause();
              break;
            case "resume":
              readableValue.resume();
              break;
          }
        }),
        subscribe(scheduler(observer)),
        addTo(observer),
      );

      const onData = dispatchTo(dispatcher);
      const onEnd = () => {
        pipe(dispatcher, dispose());
      };

      readableValue.on("data", onData);
      readableValue.on("end", onEnd);
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
