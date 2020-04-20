import iconv from "iconv-lite";
import { Readable } from "stream";
import {
  createAsyncEnumerable,
  StreamEventType,
  StreamMode,
  ofValueStream,
} from "@reactive-js/async-enumerable";
import { createDisposableValue } from "@reactive-js/disposable";
import { createObservable, onNotify, subscribe } from "@reactive-js/observable";
import { pipe, Operator } from "@reactive-js/pipe";
import { BufferStreamLike } from "./interfaces";

const disposeReadable = (readable: Readable) => {
  readable.removeAllListeners();
  readable.destroy();
};

export const createBufferStreamFromReadable = (
  factory: () => Readable,
): BufferStreamLike =>
  createAsyncEnumerable(mode =>
    createObservable(subscriber => {
      const readable = createDisposableValue(factory(), disposeReadable);

      const modeSubscription = pipe(
        mode,
        onNotify(ev => {
          switch (ev) {
            case StreamMode.Pause:
              readable.value.pause();
              break;
            case StreamMode.Produce:
              readable.value.resume();
              break;
          }
        }),
        subscribe(subscriber),
      );

      subscriber.add(readable).add(modeSubscription);

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

// FIXME: Maybe remove this
export const stringToBufferStream = (
  charset: string,
): Operator<string, BufferStreamLike> => str => {
  const buffer = iconv.encode(str, charset);
  return ofValueStream(buffer);
};
