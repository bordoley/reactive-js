import fs from "fs";
import { Readable } from "stream";
import { dispatchTo } from "../dispatcher";
import { dispose } from "../disposable";
import { FlowableLike, createLiftedFlowable } from "../flowable";
import { Factory, pipe } from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { scheduler } from "../observer";
import { addDisposable, addToDisposable, addToNodeStream } from "./nodeStream";

export const createReadableSource = (
  factory: Factory<Readable>,
): FlowableLike<Uint8Array> =>
  createLiftedFlowable(mode =>
    createObservable(observer => {
      const { dispatcher } = observer;

      const readable = pipe(
        factory(),
        addToDisposable(observer),
        addDisposable(dispatcher),
      );

      readable.pause();

      pipe(
        mode,
        onNotify(ev => {
          switch (ev) {
            case "pause":
              readable.pause();
              break;
            case "resume":
              readable.resume();
              break;
          }
        }),
        subscribe(scheduler(observer)),
        addToNodeStream(readable),
      );

      const onData = dispatchTo(dispatcher);
      const onEnd = () => {
        pipe(dispatcher, dispose());
      };

      readable.on("data", onData);
      readable.on("end", onEnd);
    }),
  );

export const readFile = (
  path: fs.PathLike,
  options?: {
    readonly flags?: string;
    readonly mode?: number;
    readonly start?: number;
    readonly end?: number;
    readonly highWaterMark?: number;
  },
) => createReadableSource(() => fs.createReadStream(path, options));
