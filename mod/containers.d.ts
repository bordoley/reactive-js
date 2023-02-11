import { Optional, Function1, Factory, Equality, Predicate, SideEffect1, Updater, Reducer } from "./functions.js";
import { DisposableLike } from "./util.js";
/**  @ignore */
declare const ContainerLike_T: unique symbol;
/**  @ignore */
declare const ContainerLike_type: unique symbol;
interface ContainerLike {
    readonly [ContainerLike_T]?: unknown;
    readonly [ContainerLike_type]?: unknown;
}
interface AsyncIterableLike<T = unknown> extends ContainerLike, AsyncIterable<T> {
    readonly [ContainerLike_type]?: AsyncIterableLike<this[typeof ContainerLike_T]>;
}
interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
    readonly [ContainerLike_type]?: IterableLike<this[typeof ContainerLike_T]>;
}
interface PromiseableLike<T = unknown> extends ContainerLike, PromiseLike<T> {
    readonly [ContainerLike_type]?: PromiseableLike<this[typeof ContainerLike_T]>;
}
interface ReadonlyArrayLike<T = unknown> extends ContainerLike, ReadonlyArray<T> {
    readonly [ContainerLike_type]?: ReadonlyArrayLike<this[typeof ContainerLike_T]>;
}
interface ReadonlySetLike<T = unknown> extends ContainerLike, ReadonlySet<T> {
    readonly [ContainerLike_type]?: ReadonlySetLike<this[typeof ContainerLike_T]>;
}
/**  @ignore */
declare const SequenceLike_data: unique symbol;
/**  @ignore */
declare const SequenceLike_next: unique symbol;
interface SequenceLike<T = unknown> extends ContainerLike {
    readonly [ContainerLike_type]?: SequenceLike<this[typeof ContainerLike_T]>;
    (): Optional<{
        readonly [SequenceLike_data]: T;
        readonly [SequenceLike_next]: SequenceLike<T>;
    }>;
}
/**  @ignore */
declare const StatefulContainerLike_state: unique symbol;
interface StatefulContainerLike extends ContainerLike {
    readonly [StatefulContainerLike_state]?: DisposableLike;
}
type ContainerOf<C extends ContainerLike, T> = C extends {
    readonly [ContainerLike_type]?: unknown;
} ? NonNullable<(C & {
    readonly [ContainerLike_T]: T;
})[typeof ContainerLike_type]> : {
    readonly _C: C;
    readonly _T: () => T;
};
type ContainerOperator<C extends ContainerLike, TA, TB> = Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
type Container<C extends ContainerLike> = {
    readonly ContainerLike_type?: C;
};
type Buffer<C extends ContainerLike, O = unknown> = Container<C> & {
    buffer: <T>(options?: O & {
        readonly maxBufferSize?: number;
    }) => ContainerOperator<C, T, readonly T[]>;
};
type CatchError<C extends ContainerLike, O = never> = Container<C> & {
    catchError<T>(onError: Function1<unknown, ContainerOf<C, T> | void>, options?: O): ContainerOperator<C, T, T>;
};
type Concat<C extends ContainerLike> = Container<C> & {
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
};
type ConcatAll<C extends ContainerLike, O = never> = Container<C> & {
    concatAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
};
type DecodeWithCharset<C extends ContainerLike, O = unknown> = Container<C> & {
    decodeWithCharset(options?: O & {
        charset?: string;
    }): ContainerOperator<C, ArrayBuffer, string>;
};
type Defer<C extends ContainerLike, O = never> = Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>, options?: O): ContainerOf<C, T>;
};
type DistinctUntilChanged<C extends ContainerLike, O = unknown> = Container<C> & {
    distinctUntilChanged<T>(options?: O & {
        readonly equality?: Equality<T>;
    }): ContainerOperator<C, T, T>;
};
type EverySatisfy<C extends ContainerLike, O = never> = Container<C> & {
    everySatisfy<T>(predicate: Predicate<T>, options?: O): ContainerOperator<C, T, boolean>;
};
type Empty<C extends ContainerLike, O = never> = Container<C> & {
    empty<T>(options?: O): ContainerOf<C, T>;
};
type ForEach<C extends ContainerLike, O = never> = Container<C> & {
    forEach<T>(effect: SideEffect1<T>, options?: O): ContainerOperator<C, T, T>;
};
type ForkConcat<C extends ContainerLike> = Container<C> & {
    forkConcat<TIn, TOut>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
};
type ForkZip<C extends ContainerLike> = Container<C> & {
    forkZip<T, TA, TB>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>): ContainerOperator<C, T, readonly [
        TA,
        TB
    ]>;
    forkZip<T, TA, TB, TC>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC
    ]>;
    forkZip<T, TA, TB, TC, TD>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD
    ]>;
    forkZip<T, TA, TB, TC, TD, TE>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>, i: ContainerOperator<C, T, TI>): ContainerOperator<C, T, readonly [
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
type FromArray<C extends ContainerLike, O = unknown> = Container<C> & {
    fromArray<T>(options?: O & {
        readonly start?: number;
        readonly count?: number;
    }): Function1<readonly T[], ContainerOf<C, T>>;
};
type FromAsyncIterable<C extends ContainerLike, O = never> = Container<C> & {
    fromAsyncIterable<T>(options?: O): Function1<AsyncIterable<T>, ContainerOf<C, T>>;
};
type FromIterable<C extends ContainerLike, O = never> = Container<C> & {
    fromIterable<T>(options?: O): Function1<Iterable<T>, ContainerOf<C, T>>;
};
type FromPromise<C extends ContainerLike, O = never> = Container<C> & {
    fromPromise<T>(options?: O): Function1<PromiseableLike<T>, ContainerOf<C, T>>;
};
type FromSequence<C extends ContainerLike, O = never> = Container<C> & {
    fromSequence<T>(options?: O): Function1<SequenceLike<T>, ContainerOf<C, T>>;
};
type FromSet<C extends ContainerLike, O = never> = Container<C> & {
    fromSet<T>(options?: O): Function1<ReadonlySet<T>, ContainerOf<C, T>>;
};
type Generate<C extends ContainerLike, O = never> = Container<C> & {
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: O): ContainerOf<C, T>;
};
type Keep<C extends ContainerLike, O = never> = Container<C> & {
    keep<T>(predicate: Predicate<T>, options?: O): ContainerOperator<C, T, T>;
};
type Map<C extends ContainerLike, O = never> = Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>, options?: O): ContainerOperator<C, TA, TB>;
};
type Never<C extends StatefulContainerLike, O = never> = Container<C> & {
    never<T>(options?: O): ContainerOf<C, T>;
};
type Pairwise<C extends ContainerLike, O = never> = Container<C> & {
    pairwise<T>(options?: O): ContainerOperator<C, T, readonly [
        T,
        T
    ]>;
};
type Reduce<C extends ContainerLike, O = never> = Container<C> & {
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: O): ContainerOperator<C, T, TAcc>;
};
type Repeat<C extends ContainerLike, O = never> = Container<C> & {
    repeat<T>(predicate: Predicate<number>, options?: O): ContainerOperator<C, T, T>;
    repeat<T>(count: number, options?: O): ContainerOperator<C, T, T>;
    repeat<T>(options?: O): ContainerOperator<C, T, T>;
};
type Scan<C extends ContainerLike, O = never> = Container<C> & {
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: O): ContainerOperator<C, T, TAcc>;
};
type SkipFirst<C extends ContainerLike, O = unknown> = Container<C> & {
    skipFirst<T>(options?: O & {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
};
type SomeSatisfy<C extends ContainerLike, O = never> = Container<C> & {
    someSatisfy<T>(predicate: Predicate<T>, options?: O): ContainerOperator<C, T, boolean>;
};
type TakeFirst<C extends ContainerLike, O = unknown> = Container<C> & {
    takeFirst<T>(options?: O & {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
};
type TakeLast<C extends ContainerLike, O = unknown> = Container<C> & {
    takeLast<T>(options?: O & {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
};
type TakeWhile<C extends ContainerLike, O = unknown> = Container<C> & {
    takeWhile<T>(predicate: Predicate<T>, options?: O & {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
};
type ThrowIfEmpty<C extends ContainerLike, O = never> = Container<C> & {
    throwIfEmpty<T>(factory: Factory<unknown>, options?: O): ContainerOperator<C, T, T>;
};
type ToAsyncIterable<C extends ContainerLike, O = never> = Container<C> & {
    toAsyncIterable<T>(options?: O): Function1<ContainerOf<C, T>, AsyncIterableLike<T>>;
};
type ToIterable<C extends ContainerLike, O = never> = Container<C> & {
    toIterable<T>(options?: O): Function1<ContainerOf<C, T>, IterableLike<T>>;
};
type ToReadonlyArray<C extends ContainerLike, O = never> = Container<C> & {
    toReadonlyArray<T>(options?: O): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
};
type ToSequence<C extends ContainerLike, O = never> = Container<C> & {
    toSequence<T>(options?: O): Function1<ContainerOf<C, T>, SequenceLike<T>>;
};
type ToReadonlySet<C extends ContainerLike, O = never> = Container<C> & {
    toReadonlySet<T>(options?: O): Function1<ContainerOf<C, T>, ReadonlySetLike<T>>;
};
type Zip<C extends ContainerLike> = Container<C> & {
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
export { AsyncIterableLike, Buffer, CatchError, Concat, ConcatAll, Container, ContainerLike, ContainerLike_T, ContainerLike_type, ContainerOf, ContainerOperator, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, ForkConcat, ForkZip, FromArray, FromAsyncIterable, FromIterable, FromPromise, FromSequence, FromSet, Generate, IterableLike, Keep, Map, Never, Pairwise, PromiseableLike, ReadonlyArrayLike, ReadonlySetLike, Reduce, Repeat, Scan, SequenceLike, SequenceLike_data, SequenceLike_next, SkipFirst, SomeSatisfy, StatefulContainerLike, StatefulContainerLike_state, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToAsyncIterable, ToIterable, ToReadonlyArray, ToReadonlySet, ToSequence, Zip };
