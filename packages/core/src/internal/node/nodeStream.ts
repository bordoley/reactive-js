import { Readable, Writable, Transform } from "stream";
import { DisposableValueLike, createDisposableValue, toErrorHandler } from "../../disposable";
import { ignore } from "../../functions";

const dispose = (writable: Readable | Writable | Transform) => {
  debugger;
  writable.removeAllListeners();
  // Calling destory can result in onError being called
  // if we don't catch the error, it crashes the process.
  // This kind of sucks, but its the best we can do;
  writable.once("error", ignore);
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
  stream.on("error", toErrorHandler(retval));

  return retval;
};
