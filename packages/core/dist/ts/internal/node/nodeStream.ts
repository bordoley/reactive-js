import { Readable, Writable, Transform } from "stream.ts";
import { DisposableValueLike, createDisposableValue } from "../../disposable.ts";
import { alwaysVoid } from "../../functions.ts";

const dispose = (writable: Readable | Writable | Transform) => {
  writable.removeAllListeners();
  // Calling destory can result in onError being called
  // if we don't catch the error, it crashes the process.
  // This kind of sucks, but its the best we can do;
  writable.once("error", alwaysVoid);
  writable.once("close", () => {
    writable.removeAllListeners();
  });
  writable.destroy();
};

export const createDisposableNodeStream = <
  T extends Readable | Writable | Transform
>(
  stream: T,
): DisposableValueLike<T> => {
  const retval = createDisposableValue<T>(stream, dispose);

  const onError = (cause: any) => {
    retval.dispose({ cause });
  };
  stream.on("error", onError);

  return retval;
};
