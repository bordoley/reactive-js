import { forEach } from "./__internal__.readonlyArray";
import { Function1, SideEffect1, callWith, pipe } from "./functions";

export function decorateMap<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  s2: SideEffect1<T>,
  s3: SideEffect1<T>,
  s4: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorateMap<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  s2: SideEffect1<T>,
  s3: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorateMap<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  s2: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorateMap<T, TResult>(
  v: T,
  s1: SideEffect1<T>,
  map: Function1<T, TResult>,
): TResult;
export function decorateMap<T>(v: T, ...sideffects: readonly any[]): any {
  pipe(sideffects.slice(0, -1), forEach(callWith(v)));
  return sideffects[sideffects.length - 1](v);
}
