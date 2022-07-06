import { ContainerLike, Container, ContainerOf, ContainerOperator, Map, ConcatAll } from "./container.mjs";
import { Disposable } from "./disposable.mjs";
import { Function1, Factory, Function2, Function3, Function4, Function5 } from "./functions.mjs";
interface LiftableContainerLike extends ContainerLike {
    readonly TLiftableContainerState: Disposable;
}
declare type LiftableContainerStateOf<C extends LiftableContainerLike, T> = C extends {
    readonly TLiftableContainerState: Disposable;
} ? (C & {
    readonly T: T;
})["TLiftableContainerState"] : {
    readonly _C: C;
    readonly _T: () => T;
};
interface CatchError<C extends LiftableContainerLike> extends Container<C> {
    catchError<T>(onError: Function1<unknown, ContainerOf<C, T> | void>): ContainerOperator<C, T, T>;
}
interface DecodeWithCharset<C extends LiftableContainerLike> extends Container<C> {
    decodeWithCharset(charset?: string): ContainerOperator<C, ArrayBuffer, string>;
}
interface Defer<C extends LiftableContainerLike> extends Container<C> {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
}
interface FromIterable<C extends LiftableContainerLike, O extends Record<string, never> = Record<string, never>> extends Container<C> {
    fromIterable<T>(options?: Partial<O>): Function1<Iterable<T>, ContainerOf<C, T>>;
}
interface FromIterator<C extends LiftableContainerLike, O extends Record<string, unknown> = Record<string, never>> extends Container<C> {
    fromIterator<T, TReturn = any, TNext = unknown>(options?: Partial<O>): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
}
interface ThrowIfEmpty<C extends LiftableContainerLike> extends Container<C> {
    throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
}
interface Using<C extends LiftableContainerLike> extends Container<C> {
    using<TResource extends Disposable, T>(resourceFactory: Factory<TResource>, containerFactory: Function1<TResource, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends Disposable, TResource2 extends Disposable, T>(resourceFactory: Factory<[
        TResource1,
        TResource2
    ]>, containerFactory: Function2<TResource1, TResource2, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends Disposable, TResource2 extends Disposable, TResource3 extends Disposable, T>(resourceFactory: Factory<[
        TResource1,
        TResource2,
        TResource3
    ]>, containerFactory: Function3<TResource1, TResource2, TResource3, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends Disposable, TResource2 extends Disposable, TResource3 extends Disposable, TResource4 extends Disposable, T>(resourceFactory: Factory<[
        TResource1,
        TResource2,
        TResource3,
        TResource4
    ]>, containerFactory: Function4<TResource1, TResource2, TResource3, TResource4, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends Disposable, TResource2 extends Disposable, TResource3 extends Disposable, TResource4 extends Disposable, TResource5 extends Disposable, T>(resourceFactory: Factory<[
        TResource1,
        TResource2,
        TResource3,
        TResource4,
        TResource5
    ]>, containerFactory: Function5<TResource1, TResource2, TResource3, TResource4, TResource5, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource extends Disposable, T>(resourceFactory: Factory<TResource | readonly TResource[]>, runnableFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>): ContainerOf<C, T>;
}
declare const encodeUtf8: <C extends LiftableContainerLike>(m: Defer<C> & Map<C>) => ContainerOperator<C, string, Uint8Array>;
declare const genMap: <C extends LiftableContainerLike, TA, TB, OConcatAll extends Record<string, never> = Record<string, never>, OFromIterator extends Record<string, never> = Record<string, never>, TReturn = any, TNext = unknown>(m: Map<C> & ConcatAll<C, OConcatAll> & FromIterator<C, OFromIterator>, mapper: Function1<TA, Generator<TB, TReturn, TNext>>, options?: Partial<OConcatAll & OFromIterator> | undefined) => ContainerOperator<C, TA, TB>;
export { CatchError, DecodeWithCharset, Defer, FromIterable, FromIterator, LiftableContainerLike, LiftableContainerStateOf, ThrowIfEmpty, Using, encodeUtf8, genMap };
