import { SideEffect1, Updater } from "../functions.js";
import { DisposableContainerLike, DisposableLike } from "../utils.js";
export interface DisposableModule {
    readonly disposed: DisposableLike;
    add<TDisposable extends DisposableLike>(child: DisposableLike): Updater<TDisposable>;
    addTo<TDisposable extends DisposableLike>(parent: DisposableLike): Updater<TDisposable>;
    addToContainer<TDisposable extends DisposableLike>(parent: DisposableContainerLike): Updater<TDisposable>;
    bindTo<TDisposable extends DisposableLike>(child: DisposableLike): Updater<TDisposable>;
    create(): DisposableLike;
    raiseIfDisposedWithError(disposable: DisposableLike): void;
    /**
     * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
     */
    toErrorHandler(disposable: DisposableLike): SideEffect1<unknown>;
}
export type Signature = DisposableModule;
export declare const add: Signature["add"];
export declare const addTo: Signature["addTo"];
export declare const addToContainer: Signature["addToContainer"];
export declare const bindTo: Signature["bindTo"];
export declare const create: Signature["create"];
export declare const disposed: Signature["disposed"];
export declare const raiseIfDisposedWithError: Signature["raiseIfDisposedWithError"];
export declare const toErrorHandler: Signature["toErrorHandler"];
