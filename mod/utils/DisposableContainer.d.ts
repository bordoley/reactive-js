import { Optional, SideEffect, SideEffect1, Updater } from "../functions.js";
import { DisposableContainerLike } from "../utils.js";
export interface DisposableContainerModule {
    onComplete<TDisposable extends DisposableContainerLike>(teardown: SideEffect): Updater<TDisposable>;
    onDisposed<TDisposable extends DisposableContainerLike>(teardown: SideEffect1<Optional<Error>>): Updater<TDisposable>;
    onError<TDisposable extends DisposableContainerLike>(teardown: SideEffect1<Error>): Updater<TDisposable>;
    toAbortSignal(disposable: DisposableContainerLike): AbortSignal;
}
export type Signature = DisposableContainerModule;
export declare const onComplete: Signature["onComplete"];
export declare const onDisposed: Signature["onDisposed"];
export declare const onError: Signature["onError"];
export declare const toAbortSignal: Signature["toAbortSignal"];
