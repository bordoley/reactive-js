import { Factory, Function1, Function2, Function3, Optional, SideEffect, SideEffect1, Updater } from "./functions.js";
import { Container, Container_type, DisposableLike, MulticastableTypeClass } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface DisposableContainer extends Container {
    readonly [Container_type]?: DisposableLike;
}
export type Type = DisposableContainer;
export interface DisposableModule extends MulticastableTypeClass<Type> {
    readonly disposed: DisposableLike;
    add<TDisposable extends DisposableLike>(child: DisposableLike, options?: {
        readonly ignoreChildErrors?: boolean;
    }): Updater<TDisposable>;
    addTo<TDisposable extends DisposableLike>(parent: DisposableLike, options?: {
        readonly ignoreChildErrors?: boolean;
    }): Updater<TDisposable>;
    bindTo<TDisposable extends DisposableLike>(child: DisposableLike): Updater<TDisposable>;
    create(): DisposableLike;
    onComplete<TDisposable extends DisposableLike>(teardown: SideEffect): Updater<TDisposable>;
    onDisposed<TDisposable extends DisposableLike>(teardown: SideEffect1<Optional<Error>>): Updater<TDisposable>;
    onError<TDisposable extends DisposableLike>(teardown: SideEffect1<Error>): Updater<TDisposable>;
    toAbortSignal(disposable: DisposableLike): AbortSignal;
    /**
     * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
     */
    toErrorHandler(disposable: DisposableLike): SideEffect1<unknown>;
    usingAsync<TDisposable extends DisposableLike, TResult = unknown>(factoryOrDisposable: TDisposable | Factory<TDisposable>): Function1<Function1<TDisposable, Promise<TResult>>, Promise<TResult>>;
    usingAsync<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TResult = unknown>(factoryOrDisposableA: TDisposableA | Factory<TDisposableA>, factoryOrDisposableB: TDisposableB | Factory<TDisposableB>): Function1<Function2<TDisposableA, TDisposableB, Promise<TResult>>, Promise<TResult>>;
    usingAsync<TDisposableA extends DisposableLike, TDisposableB extends DisposableLike, TDisposableC extends DisposableLike, TResult = unknown>(factoryOrDisposableA: TDisposableA | Factory<TDisposableA>, factoryOrDisposableB: TDisposableB | Factory<TDisposableB>, factoryOrDisposableC: TDisposableC | Factory<TDisposableC>): Function1<Function3<TDisposableA, TDisposableB, TDisposableC, Promise<TResult>>, Promise<TResult>>;
}
export type Signature = DisposableModule;
export declare const add: Signature["add"];
export declare const addEventHandler: Signature["addEventHandler"];
export declare const addTo: Signature["addTo"];
export declare const bindTo: Signature["bindTo"];
export declare const create: Signature["create"];
export declare const disposed: Signature["disposed"];
export declare const onComplete: Signature["onComplete"];
export declare const onDisposed: Signature["onDisposed"];
export declare const onError: Signature["onError"];
export declare const toAbortSignal: Signature["toAbortSignal"];
export declare const toErrorHandler: Signature["toErrorHandler"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
export declare const usingAsync: Signature["usingAsync"];
