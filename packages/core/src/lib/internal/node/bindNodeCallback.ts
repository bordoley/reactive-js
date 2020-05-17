import { dispose } from "../../disposable";
import {
  Factory,
  Function4,
  Function3,
  Function2,
  Function1,
  Function5,
  Function6,
} from "../../functions";
import { createObservable, ObservableLike, dispatch } from "../../observable";
import { none } from "../../option";

export function bindNodeCallback<R1, R2, R3, R4, T>(
  callbackFunc: Function1<Function5<unknown, R1, R2, R3, R4, unknown>, unknown>,
  selector: Function4<R1, R2, R3, R4, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback<R1, R2, R3, T>(
  callbackFunc: Function1<Function4<unknown, R1, R2, R3, unknown>, unknown>,
  selector: Function3<R1, R2, R3, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback<R1, R2, T>(
  callbackFunc: Function1<Function3<unknown, R1, R2, unknown>, unknown>,
  selector: Function2<R1, R2, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback<R1, T>(
  callbackFunc: Function1<Function2<unknown, R1, unknown>, unknown>,
  selector: Function1<R1, T>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback(
  callbackFunc: Function1<Function1<unknown, unknown>, unknown>,
): Factory<ObservableLike<void>>;

export function bindNodeCallback<A1, R1, R2, R3, R4, T>(
  callbackFunc: Function2<A1, Function5<unknown, R1, R2, R3, R4, unknown>, unknown>,
  selector: Function4<R1, R2, R3, R4, T>,
): Function1<A1, ObservableLike<T>>;
export function bindNodeCallback<A1, R1, R2, R3, T>(
  callbackFunc: Function2<A1, Function4<unknown, R1, R2, R3, unknown>, unknown>,
  selector: Function3<R1, R2, R3, T>,
): Function1<A1, ObservableLike<T>>;
export function bindNodeCallback<A1, R1, R2, T>(
  callbackFunc: Function2<A1, Function3<unknown, R1, R2, unknown>, unknown>,
  selector: Function2<R1, R2, T>,
): Function1<A1, ObservableLike<T>>;
export function bindNodeCallback<A1, R1, T>(
  callbackFunc: Function2<A1, Function2<unknown, R1, unknown>, unknown>,
  selector: Function1<R1, T>,
): Function1<A1, ObservableLike<T>>;
export function bindNodeCallback<A1>(
  callbackFunc: Function2<A1, Function1<unknown, unknown>, unknown>,
): Function1<A1, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, R1, R2, R3, R4, T>(
  callbackFunc: Function3<A1, A2, Function5<unknown, R1, R2, R3, R4, unknown>, unknown>,
  selector: Function4<R1, R2, R3, R4, T>,
): Function2<A1, A2, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, R1, R2, R3, T>(
  callbackFunc: Function3<A1, A2, Function4<unknown, R1, R2, R3, unknown>, unknown>,
  selector: Function3<R1, R2, R3, T>,
): Function2<A1, A2, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, R1, R2, T>(
  callbackFunc: Function3<A1, A2, Function3<unknown, R1, R2, unknown>, unknown>,
  selector: Function2<R1, R2, T>,
): Function2<A1, A2, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, R1, T>(
  callbackFunc: Function3<A1, A2, Function2<unknown, R1, unknown>, unknown>,
  selector: Function1<R1, T>,
): Function2<A1, A2, ObservableLike<T>>;
export function bindNodeCallback<A1, A2>(
  callbackFunc: Function3<A1, A2, Function1<unknown, unknown>, unknown>,
): Function2<A1, A2, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, A3, R1, R2, R3, R4, T>(
  callbackFunc: Function4<A1, A2, A3, Function5<unknown, R1, R2, R3, R4, unknown>, unknown>,
  selector: Function4<R1, R2, R3, R4, T>,
): Function3<A1, A2, A3, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, R1, R2, R3, T>(
  callbackFunc: Function4<A1, A2, A3, Function4<unknown, R1, R2, R3, unknown>, unknown>,
  selector: Function3<R1, R2, R3, T>,
): Function3<A1, A2, A3, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, R1, R2, T>(
  callbackFunc: Function4<A1, A2, A3, Function3<unknown, R1, R2, unknown>, unknown>,
  selector: Function2<R1, R2, T>,
): Function3<A1, A2, A3, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, R1, T>(
  callbackFunc: Function4<A1, A2, A3, Function2<unknown, R1, unknown>, unknown>,
  selector: Function1<R1, T>,
): Function3<A1, A2, A3, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3>(
  callbackFunc: Function4<A1, A2, A3, Function1<unknown, unknown>, unknown>,
): Function3<A1, A2, A3, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3, R4, T>(
  callbackFunc: Function5<A1, A2, A3, A4, Function5<unknown, R1, R2, R3, R4, unknown>, unknown>,
  selector: Function4<R1, R2, R3, R4, T>,
): Function4<A1, A2, A3, A4, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2, R3, T>(
  callbackFunc: Function5<A1, A2, A3, A4, Function4<unknown, R1, R2, R3, unknown>, unknown>,
  selector: Function3<R1, R2, R3, T>,
): Function4<A1, A2, A3, A4, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, R1, R2, T>(
  callbackFunc: Function5<A1, A2, A3, A4, Function3<unknown, R1, R2, unknown>, unknown>,
  selector: Function2<R1, R2, T>,
): Function4<A1, A2, A3, A4, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, R1, T>(
  callbackFunc: Function5<A1, A2, A3, A4, Function2<unknown, R1, unknown>, unknown>,
  selector: Function1<R1, T>,
): Function4<A1, A2, A3, A4, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4>(
  callbackFunc: Function5<A1, A2, A3, A4, Function1<unknown, unknown>, unknown>,
): Function4<A1, A2, A3, A4, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3, R4, T>(
  callbackFunc: Function6<A1, A2, A3, A4, A5, Function5<unknown, R1, R2, R3, R4, unknown>, unknown>,
  selector: Function4<R1, R2, R3, R4, T>,
): Function5<A1, A2, A3, A4, A5, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, R3, T>(
  callbackFunc: Function6<A1, A2, A3, A4, A5, Function4<unknown, R1, R2, R3,  unknown>, unknown>,
  selector: Function3<R1, R2, R3, T>,
): Function5<A1, A2, A3, A4, A5, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, R2, T>(
  callbackFunc: Function6<A1, A2, A3, A4, A5, Function3<unknown, R1, R2,  unknown>, unknown>,
  selector: Function2<R1, R2, T>,
): Function5<A1, A2, A3, A4, A5, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, A5, R1, T>(
  callbackFunc: Function6<A1, A2, A3, A4, A5, Function2<unknown, R1, unknown>, unknown>,
  selector: Function1<R1, T>,
): Function5<A1, A2, A3, A4, A5, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, A5>(
  callbackFunc: Function6<A1, A2, A3, A4, A5, Function1<unknown, unknown>, unknown>,
):Function5<A1, A2, A3, A4, A5, ObservableLike<void>>;

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
