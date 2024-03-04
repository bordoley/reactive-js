import { SideEffect1, Updater } from "../functions.js";
import { DisposableContainerLike, DisposableLike } from "../utils.js";
import Disposable_add from "./Disposable/__private__/Disposable.add.js";
import Disposable_addTo from "./Disposable/__private__/Disposable.addTo.js";
import Disposable_addToContainer from "./Disposable/__private__/Disposable.addToContainer.js";
import Disposable_bindTo from "./Disposable/__private__/Disposable.bindTo.js";
import Disposable_create from "./Disposable/__private__/Disposable.create.js";
import Disposable_disposed from "./Disposable/__private__/Disposable.disposed.js";
import Disposable_raiseIfDisposedWithError from "./Disposable/__private__/Disposable.raiseIfDisposedWithError.js";
import Disposable_toErrorHandler from "./Disposable/__private__/Disposable.toErrorHandler.js";

export interface DisposableModule {
  readonly disposed: DisposableLike;

  add<TDisposable extends DisposableLike>(
    child: DisposableLike,
  ): Updater<TDisposable>;

  addTo<TDisposable extends DisposableLike>(
    parent: DisposableLike,
  ): Updater<TDisposable>;

  addToContainer<TDisposable extends DisposableLike>(
    parent: DisposableContainerLike,
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
}

export type Signature = DisposableModule;

export const add: Signature["add"] = Disposable_add;
export const addTo: Signature["addTo"] = Disposable_addTo;
export const addToContainer: Signature["addToContainer"] =
  Disposable_addToContainer;
export const bindTo: Signature["bindTo"] = Disposable_bindTo;
export const create: Signature["create"] = Disposable_create;
export const disposed: Signature["disposed"] = Disposable_disposed;
export const raiseIfDisposedWithError: Signature["raiseIfDisposedWithError"] =
  Disposable_raiseIfDisposedWithError;
export const toErrorHandler: Signature["toErrorHandler"] =
  Disposable_toErrorHandler;
