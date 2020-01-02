import { AsyncEnumeratorResourceLike } from "./interfaces";
import { disposed as disposedDisposable } from "@reactive-js/disposable";

const _disposed: AsyncEnumeratorResourceLike<unknown, any> = {
  ...(disposedDisposable as any),
  subscriberCount: 0,
  dispatch: _ => {},
  subscribe: subscriber => subscriber.dispose(),
};

export const disposedAsyncEnumeratorResource = _disposed;
