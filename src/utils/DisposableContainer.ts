import { Optional, SideEffect, SideEffect1, Updater } from "../functions.js";
import { DisposableContainerLike } from "../utils.js";
import DisposableContainer_onComplete from "./DisposableContainer/__private__/DisposableContainer.onComplete.js";
import DisposableContainer_onDisposed from "./DisposableContainer/__private__/DisposableContainer.onDisposed.js";
import DisposableContainer_onError from "./DisposableContainer/__private__/DisposableContainer.onError.js";
import DisposableContainer_toAbortSignal from "./DisposableContainer/__private__/DisposableContainer.toAbortSignal.js";

export interface DisposableContainerModule {
  onComplete<TDisposable extends DisposableContainerLike>(
    teardown: SideEffect,
  ): Updater<TDisposable>;

  onDisposed<TDisposable extends DisposableContainerLike>(
    teardown: SideEffect1<Optional<Error>>,
  ): Updater<TDisposable>;

  onError<TDisposable extends DisposableContainerLike>(
    teardown: SideEffect1<Error>,
  ): Updater<TDisposable>;

  toAbortSignal(disposable: DisposableContainerLike): AbortSignal;
}

export type Signature = DisposableContainerModule;

export const onComplete: Signature["onComplete"] =
  DisposableContainer_onComplete;
export const onDisposed: Signature["onDisposed"] =
  DisposableContainer_onDisposed;
export const onError: Signature["onError"] = DisposableContainer_onError;
export const toAbortSignal: Signature["toAbortSignal"] =
  DisposableContainer_toAbortSignal;
