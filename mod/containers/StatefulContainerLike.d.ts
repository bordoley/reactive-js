import { DisposableLike } from '../util/DisposableLike.js';
import { Function1, Factory, Function2, Function3, Function4, Function5 } from '../util/functions.js';
import { ContainerLike, Container, ContainerOf, ContainerOperator } from "./ContainerLike.mjs";
interface StatefulContainerLike extends ContainerLike {
    readonly TStatefulContainerState?: DisposableLike;
}
declare type StatefulContainerStateOf<C extends StatefulContainerLike, T> = C extends {
    readonly TStatefulContainerState?: DisposableLike;
} ? NonNullable<(C & {
    readonly T: T;
})["TStatefulContainerState"]> : {
    readonly _C: C;
    readonly _T: () => T;
};
declare type CatchError<C extends StatefulContainerLike> = Container<C> & {
    catchError<T>(onError: Function1<unknown, ContainerOf<C, T> | void>): ContainerOperator<C, T, T>;
};
declare type DecodeWithCharset<C extends StatefulContainerLike> = Container<C> & {
    decodeWithCharset(charset?: string): ContainerOperator<C, ArrayBuffer, string>;
};
declare type Defer<C extends StatefulContainerLike> = Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
};
declare type FromIterable<C extends StatefulContainerLike, O extends Record<string, never> = Record<string, never>> = Container<C> & {
    fromIterable<T>(options?: Partial<O>): Function1<Iterable<T>, ContainerOf<C, T>>;
};
declare type FromIterator<C extends StatefulContainerLike, O extends Record<string, unknown> = Record<string, never>> = Container<C> & {
    fromIterator<T, TReturn = any, TNext = unknown>(options?: Partial<O>): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
};
declare type ThrowIfEmpty<C extends StatefulContainerLike> = Container<C> & {
    throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
};
declare type Using<C extends StatefulContainerLike> = Container<C> & {
    using<TResource extends DisposableLike, T>(resourceFactory: Factory<TResource>, containerFactory: Function1<TResource, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, T>(resourceFactory: Factory<[
        TResource1,
        TResource2
    ]>, containerFactory: Function2<TResource1, TResource2, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, T>(resourceFactory: Factory<[
        TResource1,
        TResource2,
        TResource3
    ]>, containerFactory: Function3<TResource1, TResource2, TResource3, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, TResource4 extends DisposableLike, T>(resourceFactory: Factory<[
        TResource1,
        TResource2,
        TResource3,
        TResource4
    ]>, containerFactory: Function4<TResource1, TResource2, TResource3, TResource4, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource1 extends DisposableLike, TResource2 extends DisposableLike, TResource3 extends DisposableLike, TResource4 extends DisposableLike, TResource5 extends DisposableLike, T>(resourceFactory: Factory<[
        TResource1,
        TResource2,
        TResource3,
        TResource4,
        TResource5
    ]>, containerFactory: Function5<TResource1, TResource2, TResource3, TResource4, TResource5, ContainerOf<C, T>>): ContainerOf<C, T>;
    using<TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, runnableFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>): ContainerOf<C, T>;
};
declare const encodeUtf8: <C extends StatefulContainerLike>(m: Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}) => ContainerOperator<C, string, Uint8Array>;
declare const genMap: <C extends StatefulContainerLike, TA, TB, OConcatAll extends Record<string, never> = Record<string, never>, OFromIterator extends Record<string, never> = Record<string, never>, TReturn = any, TNext = unknown>(m: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: Partial<OConcatAll> | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
} & {
    fromIterator<T_1, TReturn_1 = any, TNext_1 = unknown>(options?: Partial<OFromIterator> | undefined): Function1<Factory<Iterator<T_1, TReturn_1, TNext_1>>, ContainerOf<C, T_1>>;
}, mapper: Function1<TA, Generator<TB, TReturn, TNext>>, options?: Partial<OConcatAll & OFromIterator> | undefined) => ContainerOperator<C, TA, TB>;
export { CatchError, DecodeWithCharset, Defer, FromIterable, FromIterator, StatefulContainerLike, StatefulContainerStateOf, ThrowIfEmpty, Using, encodeUtf8, genMap };
