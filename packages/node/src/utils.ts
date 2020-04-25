import { createObservable, ObservableLike } from "@reactive-js/core/dist/js/observable";
import { none } from "@reactive-js/core/dist/js/option";

export function bindNodeCallback<R1, R2, R3, R4, T>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3, r4: R4) => T,
): () => ObservableLike<T>;
export function bindNodeCallback<R1, R2, R3, T>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3) => T,
): () => ObservableLike<T>;
export function bindNodeCallback<R1, R2, T>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2) => T,
): () => ObservableLike<T>;
export function bindNodeCallback<R1, T>(
  callbackFunc: (callback: (err: unknown, res1: R1) => unknown) => unknown,
  selector: (r1: R1) => T,
): () => ObservableLike<T>;
export function bindNodeCallback(
  callbackFunc: (callback: (err: unknown) => unknown) => unknown,
): () => ObservableLike<void>;

export function bindNodeCallback<A1, R1, R2, R3, R4, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3, r4: R4) => T,
): (arg1: A1) => ObservableLike<T>;
export function bindNodeCallback<A1, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3) => T,
): (arg1: A1) => ObservableLike<T>;
export function bindNodeCallback<A1, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2) => T,
): (arg1: A1) => ObservableLike<T>;
export function bindNodeCallback<A1, R1, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: (r1: R1) => T,
): (arg1: A1) => ObservableLike<T>;
export function bindNodeCallback<A1>(
  callbackFunc: (arg1: A1, callback: (err: unknown) => unknown) => unknown,
): (arg1: A1) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, R1, R2, R3, R4, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3, r4: R4) => T,
): (arg1: A1, arg2: A2) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3) => T,
): (arg1: A1, arg2: A2) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2) => T,
): (arg1: A1, arg2: A2) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, R1, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: (r1: R1) => T,
): (arg1: A1, arg2: A2) => ObservableLike<T>;
export function bindNodeCallback<A1, A2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, A3, R1, R2, R3, R4, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3, r4: R4) => T,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3) => T,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2) => T,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, R1, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: (r1: R1) => T,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3, R4, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3, r4: R4) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, R1, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: (r1: R1) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3, R4, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3, r4: R4) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2, r3: R3) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: (r1: R1, r2: R2) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: (r1: R1) => T,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, A5>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => ObservableLike<void>;

export function bindNodeCallback<T>(
  callback: Function,
  selector?: (...args: unknown[]) => T,
): (...args: unknown[]) => ObservableLike<T | void> {
  return function(this: unknown, ...args: unknown[]) {
    return createObservable(subscriber => {
      const handler = (cause: unknown, ...innerArgs: unknown[]) => {
        if (cause) {
          subscriber.dispose({ cause });
        } else {
          if (innerArgs.length > 0) {
            const result = (selector as (...args: unknown[]) => T)(
              ...innerArgs,
            );
            subscriber.dispatch(result);
          } else {
            subscriber.dispatch(none);
          }
          subscriber.dispose();
        }
      };

      callback.apply(this, [...args, handler]);
    });
  };
}
