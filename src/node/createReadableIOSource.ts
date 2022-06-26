import fs from "fs";
import { Readable } from "stream";
import {
  DisposableValueLike,
  add,
  addToAndDisposeParentOnChildError,
  dispose,
} from "../disposable";
import { Factory, pipe } from "../functions";
import {
  createObservable,
  dispatchTo,
  onNotify,
  subscribe,
} from "../observable";
import { FlowableLike, createStreamable } from "../streamable";
import { createDisposableNodeStream } from "./nodeStream";

export const createReadableIOSource = (
  factory: Factory<DisposableValueLike<Readable>>,
): FlowableLike<Uint8Array> =>
  createStreamable(mode =>
    createObservable(observer => {
      const { dispatcher } = observer;

      const readable = pipe(
        factory(),
        addToAndDisposeParentOnChildError(observer),
        add(dispatcher),
      );
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
        subscribe(observer.scheduler),
        addToAndDisposeParentOnChildError(observer),
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
