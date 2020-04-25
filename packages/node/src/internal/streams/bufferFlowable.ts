import { Readable } from "stream";
import { FlowEventType, FlowMode } from "@reactive-js/core/dist/js/flowable";
import { createStreamable } from "@reactive-js/core/dist/js/streamable";
import { DisposableValueLike } from "@reactive-js/core/dist/js/disposable";
import {
  createObservable,
  onNotify,
  subscribe,
} from "@reactive-js/core/dist/js/observable";
import { pipe } from "@reactive-js/core/dist/js/pipe";
import { BufferFlowableLike } from "./interfaces";

export const createBufferFlowableFromReadable = (
  factory: () => DisposableValueLike<Readable>,
): BufferFlowableLike =>
  createStreamable(mode =>
    createObservable(subscriber => {
      const readable = factory();
      subscriber.add(readable);

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
        subscribe(subscriber),
      );
      readable.add(modeSubscription);

      const onData = (data: Buffer) => {
        subscriber.dispatch({ type: FlowEventType.Next, data });
      };
      readable.value.on("data", onData);

      const onEnd = () => {
        subscriber.dispatch({ type: FlowEventType.Complete });
        readable.dispose();
      };
      readable.value.on("end", onEnd);

      const onError = (cause: any) => {
        subscriber.dispose({ cause });
      };
      readable.value.on("error", onError);

      readable.value.pause();
    }),
  );
