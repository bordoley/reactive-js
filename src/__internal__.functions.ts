import { forEach } from "./__internal__.readonlyArray";
import { Function1, SideEffect1, callWith, pipe } from "./functions";

export function decorate<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  s2: SideEffect1<T>,
  s3: SideEffect1<T>,
  s4: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorate<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  s2: SideEffect1<T>,
  s3: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorate<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  s2: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorate<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorate<T>(
  v: T,
  ...sideffects: readonly SideEffect1<T>[]
): any {
  pipe(sideffects, forEach(callWith(v)));
}
