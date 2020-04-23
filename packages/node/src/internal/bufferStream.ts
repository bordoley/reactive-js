import { Readable } from "stream";
import {
  createAsyncEnumerable,
  StreamEventType,
  StreamMode,
} from "@reactive-js/async-enumerable";
import { DisposableValueLike } from "@reactive-js/disposable";
import { createObservable, onNotify, subscribe } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { BufferStreamLike } from "./interfaces";

export const createBufferStreamFromReadable = (
  factory: () => DisposableValueLike<Readable>,
): BufferStreamLike =>
  createAsyncEnumerable(mode =>
    createObservable(subscriber => {
      const readable = factory();
      subscriber.add(readable);

      const modeSubscription = pipe(
        mode,
        onNotify(ev => {
          switch (ev) {
            case StreamMode.Pause:
              readable.value.pause();
              break;
            case StreamMode.Resume:
              readable.value.resume();
              break;
          }
        }),
        subscribe(subscriber),
      );
      readable.add(modeSubscription);

      const onData = (data: Buffer) => {
        subscriber.dispatch({ type: StreamEventType.Next, data });
      };
      readable.value.on("data", onData);

      const onEnd = () => {
        subscriber.dispatch({ type: StreamEventType.Complete });
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
