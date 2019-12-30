import { AsyncIteratorResourceLike } from "./interfaces";
import { disposed as disposedDisposable } from "@reactive-js/disposable";

const _disposed: AsyncIteratorResourceLike<unknown, any> = {
  ...disposedDisposable as any,
  subscriberCount: 0,
  dispatch: _ => {},
  subscribe: subscriber => subscriber.dispose(),
}

export const disposedAsyncIteratorResource = _disposed;
