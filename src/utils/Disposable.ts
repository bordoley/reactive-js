import {
  Factory,
  Function1,
  Function2,
  Function3,
  SideEffect1,
  Updater,
} from "../functions.js";
import { DisposableLike } from "../utils.js";
import Disposable_add from "./Disposable/__private__/Disposable.add.js";
import Disposable_addTo from "./Disposable/__private__/Disposable.addTo.js";
import Disposable_bindTo from "./Disposable/__private__/Disposable.bindTo.js";
import Disposable_create from "./Disposable/__private__/Disposable.create.js";
import Disposable_disposed from "./Disposable/__private__/Disposable.disposed.js";
import Disposable_raiseIfDisposedWithError from "./Disposable/__private__/Disposable.raiseIfDisposedWithError.js";
import Disposable_toErrorHandler from "./Disposable/__private__/Disposable.toErrorHandler.js";
import Disposable_using from "./Disposable/__private__/Disposable.using.js";
import Disposable_usingAsync from "./Disposable/__private__/Disposable.usingAsync.js";
import Disposable_usingAsyncLazy from "./Disposable/__private__/Disposable.usingAsyncLazy.js";
import Disposable_usingLazy from "./Disposable/__private__/Disposable.usingLazy.js";

export interface DisposableModule {
  readonly disposed: DisposableLike;

  add<TDisposable extends DisposableLike>(
    child: DisposableLike,
    options?: {
      readonly ignoreChildErrors?: boolean;
    },
  ): Updater<TDisposable>;

  addTo<TDisposable extends DisposableLike>(
    parent: DisposableLike,
    options?: {
      readonly ignoreChildErrors?: boolean;
    },
  ): Updater<TDisposable>;

  bindTo<TDisposable extends DisposableLike>(
    child: DisposableLike,
  ): Updater<TDisposable>;

  create(): DisposableLike;

  raiseIfDisposedWithError(disposable: DisposableLike): void;

  /**
   * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
   */
  toErrorHandler(disposable: DisposableLike): SideEffect1<unknown>;

  using<TDisposable extends DisposableLike, TResult = void>(
    factory: Factory<TDisposable>,
  ): Function1<Function1<TDisposable, TResult>, TResult>;
  using<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
  ): Function1<Function2<TDisposableA, TDisposableB, TResult>, TResult>;
  using<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TDisposableC extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
    factoryC: Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, TResult>,
    TResult
  >;

  usingLazy<TDisposable extends DisposableLike, TResult = void>(
    factory: Factory<TDisposable>,
  ): Function1<Function1<TDisposable, TResult>, Factory<TResult>>;
  usingLazy<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
  ): Function1<
    Function2<TDisposableA, TDisposableB, TResult>,
    Factory<TResult>
  >;
  usingLazy<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TDisposableC extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
    factoryC: Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, TResult>,
    Factory<TResult>
  >;

  usingAsync<TDisposable extends DisposableLike, TResult = void>(
    factory: Factory<TDisposable>,
  ): Function1<Function1<TDisposable, Promise<TResult>>, Promise<TResult>>;
  usingAsync<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
  ): Function1<
    Function2<TDisposableA, TDisposableB, Promise<TResult>>,
    Promise<TResult>
  >;
  usingAsync<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TDisposableC extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
    factoryC: Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>,
    Promise<TResult>
  >;

  usingAsyncLazy<TDisposable extends DisposableLike, TResult = void>(
    factory: Factory<TDisposable>,
  ): Function1<
    Function1<TDisposable, Promise<TResult>>,
    Factory<Promise<TResult>>
  >;
  usingAsyncLazy<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
  ): Function1<
    Function2<TDisposableA, TDisposableB, Promise<TResult>>,
    Factory<Promise<TResult>>
  >;
  usingAsyncLazy<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TDisposableC extends DisposableLike,
    TResult = void,
  >(
    factoryA: Factory<TDisposableA>,
    factoryB: Factory<TDisposableB>,
    factoryC: Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>,
    Factory<Promise<TResult>>
  >;
}

export type Signature = DisposableModule;

export const add: Signature["add"] = Disposable_add;
export const addTo: Signature["addTo"] = Disposable_addTo;
export const bindTo: Signature["bindTo"] = Disposable_bindTo;
export const create: Signature["create"] = Disposable_create;
export const disposed: Signature["disposed"] = Disposable_disposed;
export const raiseIfDisposedWithError: Signature["raiseIfDisposedWithError"] =
  Disposable_raiseIfDisposedWithError;
export const toErrorHandler: Signature["toErrorHandler"] =
  Disposable_toErrorHandler;
export const using: Signature["using"] = Disposable_using;
export const usingAsync: Signature["usingAsync"] = Disposable_usingAsync;
export const usingAsyncLazy: Signature["usingAsyncLazy"] =
  Disposable_usingAsyncLazy;
export const usingLazy: Signature["usingLazy"] = Disposable_usingLazy;
