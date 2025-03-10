import {
  Method,
  Method1,
  Optional,
  SideEffect,
  SideEffect1,
  Updater,
} from "../functions.js";
import { DisposableContainerLike } from "../utils.js";
import DisposableContainer_onComplete from "./DisposableContainer/__private__/DisposableContainer.onComplete.js";
import DisposableContainer_onDisposed from "./DisposableContainer/__private__/DisposableContainer.onDisposed.js";
import DisposableContainer_onError from "./DisposableContainer/__private__/DisposableContainer.onError.js";
import DisposableContainer_toAbortSignal from "./DisposableContainer/__private__/DisposableContainer.toAbortSignal.js";
import DisposableContainer_toPromise from "./DisposableContainer/__private__/DisposableContainer.toPromise.js";

export interface DisposableContainerModule {
  onComplete<TDisposable extends DisposableContainerLike>(
    teardown: SideEffect,
  ): Updater<TDisposable>;
  onComplete<TDisposable extends DisposableContainerLike>(
    teardown: Method<TDisposable, void>,
  ): Updater<TDisposable>;

  onDisposed<TDisposable extends DisposableContainerLike>(
    teardown: SideEffect1<Optional<Error>>,
  ): Updater<TDisposable>;

  onDisposed<TDisposable extends DisposableContainerLike>(
    teardown: Method1<TDisposable, Optional<Error>>,
  ): Updater<TDisposable>;

  onError<TDisposable extends DisposableContainerLike>(
    teardown: SideEffect1<Error>,
  ): Updater<TDisposable>;
  onError<TDisposable extends DisposableContainerLike>(
    teardown: Method1<TDisposable, Error>,
  ): Updater<TDisposable>;

  toAbortSignal(disposable: DisposableContainerLike): AbortSignal;

  toPromise(disposable: DisposableContainerLike): Promise<void>;
}

export type Signature = DisposableContainerModule;

export const onComplete: Signature["onComplete"] =
  DisposableContainer_onComplete;
export const onDisposed: Signature["onDisposed"] =
  DisposableContainer_onDisposed;
export const onError: Signature["onError"] = DisposableContainer_onError;
export const toAbortSignal: Signature["toAbortSignal"] =
  DisposableContainer_toAbortSignal;
export const toPromise: Signature["toPromise"] = DisposableContainer_toPromise;
