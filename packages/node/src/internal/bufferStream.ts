import { Readable } from "stream";
import {
  createAsyncEnumerable,
  StreamEventType,
  StreamMode,
} from "@reactive-js/async-enumerable";
import { createDisposableValue } from "@reactive-js/disposable";
import { createObservable, onNotify, subscribe } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { BufferStreamLike } from "./interfaces";

const disposeReadable = (readable: Readable) => {
  readable.removeAllListeners();
  // Calling destory can result in onError being called
  // if we don't catch the error, it crashes the process.
  // This kind of sucks, but its the best we can do;
  readable.once("error", () => {});
  readable.once("close", () => {
    readable.removeAllListeners();
  });
  readable.destroy();
};

export const createBufferStreamFromReadable = (
  factory: () => Readable,
): BufferStreamLike =>
  createAsyncEnumerable(mode =>
    createObservable(subscriber => {
      const readable = createDisposableValue(factory(), disposeReadable);
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
