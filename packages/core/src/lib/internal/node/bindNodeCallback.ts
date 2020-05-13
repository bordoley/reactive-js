import { dispose } from "../../disposable";
import {
  Factory,
  Function4,
  Function3,
  Function2,
  Function,
} from "../../functions";
import { createObservable, ObservableLike, dispatch } from "../../observable";
import { none } from "../../option";

export function bindNodeCallback<R1, R2, R3, R4, T>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: Function4<R1, R2, R3, R4, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback<R1, R2, R3, T>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: Function3<R1, R2, R3, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback<R1, R2, T>(
  callbackFunc: (
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: Function2<R1, R2, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback<R1, T>(
  callbackFunc: (callback: (err: unknown, res1: R1) => unknown) => unknown,
  selector: Function<R1, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback(
  callbackFunc: (callback: (err: unknown) => unknown) => unknown,
): Factory<ObservableLike<void>>;

export function bindNodeCallback<A1, R1, R2, R3, R4, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3, res4: R4) => unknown,
  ) => unknown,
  selector: Function4<R1, R2, R3, R4, T>,
): (arg1: A1) => ObservableLike<T>;
export function bindNodeCallback<A1, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: Function3<R1, R2, R3, T>,
): (arg1: A1) => ObservableLike<T>;
export function bindNodeCallback<A1, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: Function2<R1, R2, T>,
): (arg1: A1) => ObservableLike<T>;
export function bindNodeCallback<A1, R1, T>(
  callbackFunc: (
    arg1: A1,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: Function<R1, T>,
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
  selector: Function4<R1, R2, R3, R4, T>,
): (arg1: A1, arg2: A2) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: Function3<R1, R2, R3, T>,
): (arg1: A1, arg2: A2) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: Function2<R1, R2, T>,
): (arg1: A1, arg2: A2) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, R1, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: Function<R1, T>,
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
  selector: Function4<R1, R2, R3, R4, T>,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: Function3<R1, R2, R3, T>,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: Function2<R1, R2, T>,
): (arg1: A1, arg2: A2, arg3: A3) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, R1, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: Function<R1, T>,
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
  selector: Function4<R1, R2, R3, R4, T>,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2, res3: R3) => unknown,
  ) => unknown,
  selector: Function3<R1, R2, R3, T>,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1, res2: R2) => unknown,
  ) => unknown,
  selector: Function2<R1, R2, T>,
): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => ObservableLike<T>;
export function bindNodeCallback<A1, A2, A3, A4, R1, T>(
  callbackFunc: (
    arg1: A1,
    arg2: A2,
    arg3: A3,
    arg4: A4,
    callback: (err: unknown, res1: R1) => unknown,
  ) => unknown,
  selector: Function<R1, T>,
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
  selector: Function4<R1, R2, R3, R4, T>,
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
  selector: Function3<R1, R2, R3, T>,
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
  selector: Function2<R1, R2, T>,
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
  selector: Function<R1, T>,
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
  callback: (...args: any[]) => any,
  selector?: (...args: unknown[]) => T,
): (...args: unknown[]) => ObservableLike<T | void> {
  return function(this: unknown, ...args: unknown[]) {
    return createObservable(dispatcher => {
      const handler = (cause: unknown, ...innerArgs: unknown[]) => {
        if (cause) {
          dispose(dispatcher, { cause });
        } else {
          if (innerArgs.length > 0) {
            const result = (selector as (...args: unknown[]) => T)(
              ...innerArgs,
            );
            dispatch(dispatcher, result);
          } else {
            dispatch(dispatcher, none);
          }
          dispose(dispatcher);
        }
      };

      callback.apply(this, [...args, handler]);
    });
  };
}
