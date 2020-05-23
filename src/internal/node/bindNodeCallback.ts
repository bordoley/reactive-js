import { dispose } from "../../disposable";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  SideEffect1,
  SideEffect2,
  SideEffect3,
  SideEffect4,
  SideEffect5,
  SideEffect6,
} from "../../functions";
import { createObservable, ObservableLike, dispatch } from "../../observable";

export function bindNodeCallback<T>(
  callbackFunc: SideEffect1<SideEffect2<unknown, T>>,
): Factory<ObservableLike<T>>;
export function bindNodeCallback(
  callbackFunc: SideEffect1<SideEffect1<unknown>>,
): Factory<ObservableLike<void>>;

export function bindNodeCallback<A1, T>(
  callbackFunc: SideEffect2<A1, SideEffect2<unknown, T>>,
): Function1<A1, ObservableLike<T>>;
export function bindNodeCallback<A1>(
  callbackFunc: SideEffect2<A1, SideEffect1<unknown>>,
): Function1<A1, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, T>(
  callbackFunc: SideEffect3<A1, A2, SideEffect2<unknown, T>>,
): Function2<A1, A2, ObservableLike<T>>;
export function bindNodeCallback<A1, A2>(
  callbackFunc: SideEffect3<A1, A2, SideEffect1<unknown>>,
): Function2<A1, A2, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, A3, T>(
  callbackFunc: SideEffect4<A1, A2, A3, SideEffect2<unknown, T>>,
): Function3<A1, A2, A3, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3>(
  callbackFunc: SideEffect4<A1, A2, A3, SideEffect1<unknown>>,
): Function3<A1, A2, A3, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, A3, A4, T>(
  callbackFunc: SideEffect5<A1, A2, A3, A4, SideEffect2<unknown, T>>,
): Function4<A1, A2, A3, A4, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4>(
  callbackFunc: SideEffect5<A1, A2, A3, A4, SideEffect1<unknown>>,
): Function4<A1, A2, A3, A4, ObservableLike<void>>;

export function bindNodeCallback<A1, A2, A3, A4, A5, T>(
  callbackFunc: SideEffect6<A1, A2, A3, A4, A5, SideEffect2<unknown, T>>,
): Function5<A1, A2, A3, A4, A5, ObservableLike<T>>;
export function bindNodeCallback<A1, A2, A3, A4, A5>(
  callbackFunc: SideEffect6<A1, A2, A3, A4, A5, SideEffect1<unknown>>,
): Function5<A1, A2, A3, A4, A5, ObservableLike<void>>;

export function bindNodeCallback<T>(
  callback: (...args: readonly any[]) => any,
): (...args: readonly unknown[]) => ObservableLike<T | void> {
  return function(this: unknown, ...args: readonly unknown[]) {
    return createObservable(dispatcher => {
      const handler = (cause: unknown, arg: any) => {
        if (cause) {
          dispose(dispatcher, { cause });
        } else {
          dispatch(dispatcher, arg);
          dispose(dispatcher);
        }
      };

      callback.apply(this, [...args, handler]);
    });
  };
}
