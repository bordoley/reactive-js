import { createObservable, ObservableLike } from "@reactive-js/rx";

export function bindNodeCallback<R1, R2, R3, R4>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
): () => ObservableLike<[R1, R2, R3, R4]>;
export function bindNodeCallback<R1, R2, R3>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
): () => ObservableLike<[R1, R2, R3]>;
export function bindNodeCallback<R1, R2>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
): () => ObservableLike<[R1, R2]>;
export function bindNodeCallback<R1>(
  callbackFunc: (callback: (err: unknown, res1: R1) => unknown) => unknown,
): () => ObservableLike<R1>;
export function bindNodeCallback(
  callbackFunc: (callback: (err: unknown) => unknown) => unknown,
): () => ObservableLike<void>;

export function bindNodeCallback<A1, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
): (arg1: A1) => ObservableLike<[R1, R2, R3, R4]>;
export function bindNodeCallback<A1, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
): (arg1: A1) => ObservableLike<[R1, R2, R3]>;
export function bindNodeCallback<A1, R1, R2>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
): (arg1: A1) => ObservableLike<[R1, R2]>;
export function bindNodeCallback<A1, R1>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
): (arg1: A1) => ObservableLike<R1>;
export function bindNodeCallback<A1>(
  callbackFunc: (arg1: A1, callback: (err: unknown) => unknown) => unknown,
): (arg1: A1) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2) => ObservableLike<[R1, R2, R3, R4]>;
export function bindNodeCallback<A1, A2, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2) => ObservableLike<[R1, R2, R3]>;
export function bindNodeCallback<A1, A2, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2) => ObservableLike<[R1, R2]>;
export function bindNodeCallback<A1, A2, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2) => ObservableLike<R1>;
export function bindNodeCallback<A1, A2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, A3, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<[R1, R2, R3, R4]>;
export function bindNodeCallback<A1, A2, A3, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<[R1, R2, R3]>;
export function bindNodeCallback<A1, A2, A3, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<[R1, R2]>;
export function bindNodeCallback<A1, A2, A3, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<R1>;
export function bindNodeCallback<A1, A2, A3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<[R1, R2, R3, R4]>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<[R1, R2, R3]>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<[R1, R2]>;
export function bindNodeCallback<A1, A2, A3, A4, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<R1>;
export function bindNodeCallback<A1, A2, A3, A4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<void>;

export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3, R4>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
): (
  arg1: A1,
  arg2: A2,
  arg3: A3,
  arg4: A4,
  arg5: A5,
) => ObservableLike<[R1, R2, R3, R4]>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
): (
  arg1: A1,
  arg2: A2,
  arg3: A3,
  arg4: A4,
  arg5: A5,
) => ObservableLike<[R1, R2, R3]>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
): (
  arg1: A1,
  arg2: A2,
  arg3: A3,
  arg4: A4,
  arg5: A5,
) => ObservableLike<[R1, R2]>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    arg5: A5,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => ObservableLike<R1>;
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

export function bindNodeCallback(
  callback: Function,
): (...args: unknown[]) => ObservableLike<unknown> {
  return function(this: unknown, ...args: unknown[]) {
    return createObservable(observer => {
      const handler = (cause: unknown, ...innerArgs: unknown[]) => {
        if (cause) {
          observer.onComplete({ cause });
        } else {
          if (innerArgs.length > 1) {
            observer.onNext(innerArgs);
          } else if (innerArgs.length === 1) {
            observer.onNext(innerArgs[0]);
          }
          observer.onComplete();
        }
      };

      callback.apply(this, [...args, handler]);
    });
  };
}
