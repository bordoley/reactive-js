import { Factory, Function1, Function2, Function3, SideEffect1, Updater } from "../functions.js";
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
    using<TDisposable extends DisposableLike, TResult = void>(factory: Factory<TDisposable>): Function1<Function1<TDisposable, TResult>, TResult>;
    using<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>): Function1<Function2<TDisposableA, TDisposableB, TResult>, TResult>;
    using<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TDisposableC extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>, factoryC: Factory<TDisposableC>): Function1<Function3<TDisposableA, TDisposableB, TDisposableC, TResult>, TResult>;
    usingLazy<TDisposable extends DisposableLike, TResult = void>(factory: Factory<TDisposable>): Function1<Function1<TDisposable, TResult>, Factory<TResult>>;
    usingLazy<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>): Function1<Function2<TDisposableA, TDisposableB, TResult>, Factory<TResult>>;
    usingLazy<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TDisposableC extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>, factoryC: Factory<TDisposableC>): Function1<Function3<TDisposableA, TDisposableB, TDisposableC, TResult>, Factory<TResult>>;
    usingAsync<TDisposable extends DisposableLike, TResult = void>(factory: Factory<TDisposable>): Function1<Function1<TDisposable, Promise<TResult>>, Promise<TResult>>;
    usingAsync<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>): Function1<Function2<TDisposableA, TDisposableB, Promise<TResult>>, Promise<TResult>>;
    usingAsync<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TDisposableC extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>, factoryC: Factory<TDisposableC>): Function1<Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>, Promise<TResult>>;
    usingAsyncLazy<TDisposable extends DisposableLike, TResult = void>(factory: Factory<TDisposable>): Function1<Function1<TDisposable, Promise<TResult>>, Factory<Promise<TResult>>>;
    usingAsyncLazy<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>): Function1<Function2<TDisposableA, TDisposableB, Promise<TResult>>, Factory<Promise<TResult>>>;
    usingAsyncLazy<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TDisposableC extends DisposableLike, TResult = void>(factoryA: Factory<TDisposableA>, factoryB: Factory<TDisposableB>, factoryC: Factory<TDisposableC>): Function1<Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>, Factory<Promise<TResult>>>;
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
export declare const using: Signature["using"];
export declare const usingAsync: Signature["usingAsync"];
export declare const usingAsyncLazy: Signature["usingAsyncLazy"];
export declare const usingLazy: Signature["usingLazy"];
