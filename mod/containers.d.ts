import { Option, Function1, Factory, Equality, Predicate, SideEffect1, Updater, Reducer, Function2, Function3, Function4, Function5 } from "./functions.mjs";
import { DisposableLike } from "./util.mjs";
interface ContainerLike {
    readonly T?: unknown;
    readonly TContainerOf?: unknown;
}
interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
    readonly TContainerOf?: IterableLike<this["T"]>;
}
interface ReadonlyArrayLike<T = unknown> extends ContainerLike, ReadonlyArray<T> {
    readonly TContainerOf?: ReadonlyArrayLike<this["T"]>;
}
interface SequenceLike<T = unknown> extends ContainerLike {
    readonly TContainerOf?: SequenceLike<this["T"]>;
    (): Option<{
        readonly data: T;
        readonly next: SequenceLike<T>;
    }>;
}
interface PromiseLike<T = unknown> extends ContainerLike, Promise<T> {
    readonly TContainerOf?: PromiseLike<this["T"]>;
}
interface StatefulContainerLike extends ContainerLike {
    readonly TStatefulContainerState?: DisposableLike;
}
declare type ContainerOf<C extends ContainerLike, T> = C extends {
    readonly TContainerOf?: unknown;
} ? NonNullable<(C & {
    readonly T: T;
})["TContainerOf"]> : {
    readonly _C: C;
    readonly _T: () => T;
};
declare type StatefulContainerStateOf<C extends StatefulContainerLike, T> = C extends {
    readonly TStatefulContainerState?: DisposableLike;
} ? NonNullable<(C & {
    readonly T: T;
})["TStatefulContainerState"]> : {
    readonly _C: C;
    readonly _T: () => T;
};
declare type ContainerOperator<C, TA, TB> = Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
declare type Container<C extends ContainerLike> = {
    readonly TContainerOf?: C;
};
declare type Buffer<C extends ContainerLike> = Container<C> & {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number;
    }) => ContainerOperator<C, T, readonly T[]>;
};
declare type CatchError<C extends ContainerLike> = Container<C> & {
    catchError<T>(onError: Function1<unknown, ContainerOf<C, T> | void>): ContainerOperator<C, T, T>;
};
declare type Concat<C extends ContainerLike> = Container<C> & {
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
};
declare type ConcatAll<C extends ContainerLike, O = Record<string, never>> = Container<C> & {
    concatAll: <T>(options?: Partial<O>) => ContainerOperator<C, ContainerOf<C, T>, T>;
};
declare type DecodeWithCharset<C extends ContainerLike> = Container<C> & {
    decodeWithCharset(charset?: string): ContainerOperator<C, ArrayBuffer, string>;
};
declare type Defer<C extends ContainerLike, TOptions = never> = Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>, options?: TOptions): ContainerOf<C, T>;
};
declare type DistinctUntilChanged<C extends ContainerLike> = Container<C> & {
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ContainerOperator<C, T, T>;
};
declare type EverySatisfy<C extends ContainerLike> = Container<C> & {
    everySatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
};
declare type Empty<C extends ContainerLike, TOptions = never> = Container<C> & {
    empty<T>(options?: TOptions): ContainerOf<C, T>;
};
declare type ForEach<C extends ContainerLike> = Container<C> & {
    forEach<T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
};
declare type FromArrayOptions = {
    readonly start: number;
    readonly count: number;
};
declare type FromArray<C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions> = Container<C> & {
    fromArray<T>(options?: Partial<O>): Function1<readonly T[], ContainerOf<C, T>>;
};
declare type FromIterable<C extends ContainerLike, O extends Record<string, never> = Record<string, never>> = Container<C> & {
    fromIterable<T>(options?: Partial<O>): Function1<Iterable<T>, ContainerOf<C, T>>;
};
declare type FromIterator<C extends ContainerLike, O extends Record<string, unknown> = Record<string, never>> = Container<C> & {
    fromIterator<T, TReturn = any, TNext = unknown>(options?: Partial<O>): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
};
declare type FromValue<C extends ContainerLike, TOptions = never> = Container<C> & {
    fromValue<T>(options?: TOptions): Function1<T, ContainerOf<C, T>>;
};
declare type Generate<C extends ContainerLike, TOptions = never> = Container<C> & {
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: TOptions): ContainerOf<C, T>;
};
declare type Keep<C extends ContainerLike> = Container<C> & {
    keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
};
declare type Map<C extends ContainerLike> = Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
};
declare type Pairwise<C extends ContainerLike> = Container<C> & {
    pairwise<T>(): ContainerOperator<C, T, readonly [
        T,
        T
    ]>;
};
declare type Reduce<C extends ContainerLike> = Container<C> & {
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
};
declare type Repeat<C extends ContainerLike> = Container<C> & {
    repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
    repeat<T>(count: number): ContainerOperator<C, T, T>;
    repeat<T>(): ContainerOperator<C, T, T>;
};
declare type Scan<C extends ContainerLike> = Container<C> & {
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
};
declare type SkipFirst<C extends ContainerLike> = Container<C> & {
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
};
declare type SomeSatisfy<C extends ContainerLike> = Container<C> & {
    someSatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
};
declare type TakeFirst<C extends ContainerLike> = Container<C> & {
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
};
declare type TakeLast<C extends ContainerLike> = Container<C> & {
    takeLast<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
};
declare type TakeWhile<C extends ContainerLike> = Container<C> & {
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
};
declare type ThrowIfEmpty<C extends ContainerLike> = Container<C> & {
    throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
};
declare type ToIterable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toIterable<T>(options?: TOptions): Function1<ContainerOf<C, T>, Iterable<T>>;
};
declare type ToPromise<C extends ContainerLike, TOptions = never> = Container<C> & {
    toPromise<T>(options?: TOptions): Function1<ContainerOf<C, T>, PromiseLike<T>>;
};
declare type ToReadonlyArray<C extends ContainerLike, TOptions = never> = Container<C> & {
    toReadonlyArray<T>(options?: TOptions): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
};
declare type ToSequence<C extends ContainerLike, TOptions = never> = Container<C> & {
    toSequence<T>(options?: TOptions): Function1<ContainerOf<C, T>, SequenceLike<T>>;
};
declare type Using<C extends ContainerLike> = Container<C> & {
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
declare type Zip<C extends ContainerLike> = Container<C> & {
    zip<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [
        TA,
        TB
    ]>;
    zip<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [
        TA,
        TB,
        TC
    ]>;
    zip<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD
    ]>;
    zip<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE
    ]>;
    zip<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH,
        TI
    ]>;
};
declare const emptyReadonlyArray: Empty<ReadonlyArrayLike>["empty"];
declare const emptyReadonlyArrayT: Empty<ReadonlyArrayLike>;
declare const generateSequence: Generate<SequenceLike>["generate"];
declare const generateSequenceT: Generate<SequenceLike>;
export { Buffer, CatchError, Concat, ConcatAll, Container, ContainerLike, ContainerOf, ContainerOperator, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, FromArray, FromArrayOptions, FromIterable, FromIterator, FromValue, Generate, IterableLike, Keep, Map, Pairwise, PromiseLike, ReadonlyArrayLike, Reduce, Repeat, Scan, SequenceLike, SkipFirst, SomeSatisfy, StatefulContainerLike, StatefulContainerStateOf, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToIterable, ToPromise, ToReadonlyArray, ToSequence, Using, Zip, emptyReadonlyArray, emptyReadonlyArrayT, generateSequence, generateSequenceT };
