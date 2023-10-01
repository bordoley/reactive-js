import {
  Factory,
  Function1,
  Function2,
  Function3,
  Optional,
  SideEffect,
  SideEffect1,
  Updater,
} from "../functions.js";
import { DisposableLike } from "../utils.js";
import Disposable_add from "./Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "./Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "./Disposable/__internal__/Disposable.bindTo.js";
import Disposable_create from "./Disposable/__internal__/Disposable.create.js";
import Disposable_disposed from "./Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "./Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "./Disposable/__internal__/Disposable.onDisposed.js";
import Disposable_onError from "./Disposable/__internal__/Disposable.onError.js";
import Disposable_raiseIfDisposedWithError from "./Disposable/__internal__/Disposable.raiseIfDisposedWithError.js";
import Disposable_toAbortSignal from "./Disposable/__internal__/Disposable.toAbortSignal.js";
import Disposable_toErrorHandler from "./Disposable/__internal__/Disposable.toErrorHandler.js";
import Disposable_using from "./Disposable/__internal__/Disposable.using.js";
import Disposable_usingAsync from "./Disposable/__internal__/Disposable.usingAsync.js";
import Disposable_usingAsyncLazy from "./Disposable/__internal__/Disposable.usingAsyncLazy.js";
import Disposable_usingLazy from "./Disposable/__internal__/Disposable.usingLazy.js";

/**
 * @noInheritDoc
 * @category Module
 */
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

  onComplete<TDisposable extends DisposableLike>(
    teardown: SideEffect,
  ): Updater<TDisposable>;

  onDisposed<TDisposable extends DisposableLike>(
    teardown: SideEffect1<Optional<Error>>,
  ): Updater<TDisposable>;

  onError<TDisposable extends DisposableLike>(
    teardown: SideEffect1<Error>,
  ): Updater<TDisposable>;

  raiseIfDisposedWithError(disposable: DisposableLike): void;

  toAbortSignal(disposable: DisposableLike): AbortSignal;

  /**
   * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
   */
  toErrorHandler(disposable: DisposableLike): SideEffect1<unknown>;

  using<TDisposable extends DisposableLike, TResult = void>(
    factoryOrDisposable: TDisposable | Factory<TDisposable>,
  ): Function1<Function1<TDisposable, TResult>, TResult>;
  using<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
  ): Function1<Function2<TDisposableA, TDisposableB, TResult>, TResult>;
  using<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TDisposableC extends DisposableLike,
    TResult = void,
  >(
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
    factoryOrDisposableC: TDisposableC | Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, TResult>,
    TResult
  >;

  usingLazy<TDisposable extends DisposableLike, TResult = void>(
    factoryOrDisposable: TDisposable | Factory<TDisposable>,
  ): Function1<Function1<TDisposable, TResult>, Factory<TResult>>;
  usingLazy<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
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
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
    factoryOrDisposableC: TDisposableC | Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, TResult>,
    Factory<TResult>
  >;

  usingAsync<TDisposable extends DisposableLike, TResult = void>(
    factoryOrDisposable: TDisposable | Factory<TDisposable>,
  ): Function1<Function1<TDisposable, Promise<TResult>>, Promise<TResult>>;
  usingAsync<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
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
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
    factoryOrDisposableC: TDisposableC | Factory<TDisposableC>,
  ): Function1<
    Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>,
    Promise<TResult>
  >;

  usingAsyncLazy<TDisposable extends DisposableLike, TResult = void>(
    factoryOrDisposable: TDisposable | Factory<TDisposable>,
  ): Function1<
    Function1<TDisposable, Promise<TResult>>,
    Factory<Promise<TResult>>
  >;
  usingAsyncLazy<
    TDisposableA extends DisposableLike,
    TDisposableB extends DisposableLike,
    TResult = void,
  >(
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
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
    factoryOrDisposableA: TDisposableA | Factory<TDisposableA>,
    factoryOrDisposableB: TDisposableB | Factory<TDisposableB>,
    factoryOrDisposableC: TDisposableC | Factory<TDisposableC>,
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
export const onComplete: Signature["onComplete"] = Disposable_onComplete;
export const onDisposed: Signature["onDisposed"] = Disposable_onDisposed;
export const onError: Signature["onError"] = Disposable_onError;
export const raiseIfDisposedWithError: Signature["raiseIfDisposedWithError"] =
  Disposable_raiseIfDisposedWithError;
export const toAbortSignal: Signature["toAbortSignal"] =
  Disposable_toAbortSignal;
export const toErrorHandler: Signature["toErrorHandler"] =
  Disposable_toErrorHandler;
export const using: Signature["using"] = Disposable_using;
export const usingAsync: Signature["usingAsync"] = Disposable_usingAsync;
export const usingAsyncLazy: Signature["usingAsyncLazy"] =
  Disposable_usingAsyncLazy;
export const usingLazy: Signature["usingLazy"] = Disposable_usingLazy;
