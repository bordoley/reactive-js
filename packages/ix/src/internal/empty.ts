import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceLike, AsyncEnumerableLike } from "./interfaces";
import { disposed as disposedDisposable } from "@reactive-js/disposable";

const disposed: AsyncEnumeratorResourceLike<unknown, any> = {
  ...(disposedDisposable as any),
  now: 0,
  subscriberCount: 0,
  notify(_) {},
  notifySafe(_) {},
  schedule: _ => disposedDisposable,
  subscribe: subscriber => subscriber.dispose(),
};

const enumerateAsync = <TReq, T>(
  _: SchedulerLike,
): AsyncEnumeratorResourceLike<TReq, T> => disposed;

const instance = { enumerateAsync };

/**
 * Returns an empty `AsyncEnumerableLike` that always returns 
 * a disposed `AsyncEnumeratorLike` instance.
 */
export const empty = <TReq, T>(): AsyncEnumerableLike<TReq, T> => instance;
