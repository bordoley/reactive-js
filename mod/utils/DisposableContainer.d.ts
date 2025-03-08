import { Method, Method1, Optional, SideEffect, SideEffect1, Updater } from "../functions.js";
import { DisposableContainerLike } from "../utils.js";
export interface DisposableContainerModule {
    onComplete<TDisposable extends DisposableContainerLike>(teardown: SideEffect): Updater<TDisposable>;
    onComplete<TDisposable extends DisposableContainerLike>(teardown: Method<TDisposable, void>): Updater<TDisposable>;
    onDisposed<TDisposable extends DisposableContainerLike>(teardown: SideEffect1<Optional<Error>>): Updater<TDisposable>;
    onDisposed<TDisposable extends DisposableContainerLike>(teardown: Method1<TDisposable, Optional<Error>>): Updater<TDisposable>;
    onError<TDisposable extends DisposableContainerLike>(teardown: SideEffect1<Error>): Updater<TDisposable>;
    onError<TDisposable extends DisposableContainerLike>(teardown: Method1<TDisposable, Error>): Updater<TDisposable>;
    toAbortSignal(disposable: DisposableContainerLike): AbortSignal;
    toPromise(disposable: DisposableContainerLike): Promise<void>;
}
export type Signature = DisposableContainerModule;
export declare const onComplete: Signature["onComplete"];
export declare const onDisposed: Signature["onDisposed"];
export declare const onError: Signature["onError"];
export declare const toAbortSignal: Signature["toAbortSignal"];
export declare const toPromise: Signature["toPromise"];
