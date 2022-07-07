import { SideEffect1, Function1 } from "./functions.mjs";
declare function decorate<T, TResult>(v: T, s1: SideEffect1<T>, s2: SideEffect1<T>, s3: SideEffect1<T>, s4: SideEffect1<T>, map: Function1<T, TResult>): TResult;
declare function decorate<T, TResult>(v: T, s1: SideEffect1<T>, s2: SideEffect1<T>, s3: SideEffect1<T>, map: Function1<T, TResult>): TResult;
declare function decorate<T, TResult>(v: T, s1: SideEffect1<T>, s2: SideEffect1<T>, map: Function1<T, TResult>): TResult;
declare function decorate<T, TResult>(v: T, s1: SideEffect1<T>, map: Function1<T, TResult>): TResult;
export { decorate };
