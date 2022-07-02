import { Disposable } from "./disposable.mjs";
import { Function1, Factory, Equality, Predicate, Updater, Reducer, Function2, Function3, Function4, Function5, TypePredicate } from "./functions.mjs";
import { Option } from "./option.mjs";
interface ContainerLike {
    readonly T?: unknown;
    readonly type?: unknown;
}
declare abstract class AbstractContainer implements ContainerLike {
    get type(): this;
    get T(): unknown;
}
declare abstract class DisposableContainer extends Disposable implements ContainerLike {
    get type(): this;
    get T(): unknown;
}
declare type ContainerOf<C extends ContainerLike, T> = C extends {
    readonly type: unknown;
} ? (C & {
    readonly T: T;
})["type"] : {
    readonly _C: C;
    readonly _T: () => T;
};
declare type ContainerOperator<C, TA, TB> = Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
interface Container<C extends ContainerLike> {
    readonly type?: C;
}
interface Buffer<C extends ContainerLike> extends Container<C> {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number;
    }) => ContainerOperator<C, T, readonly T[]>;
}
interface Concat<C extends ContainerLike> extends Container<C> {
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
}
interface ConcatAll<C extends ContainerLike, O = Record<string, never>> extends Container<C> {
    concatAll: <T>(options?: Partial<O>) => ContainerOperator<C, ContainerOf<C, T>, T>;
}
interface DecodeWithCharset<C extends ContainerLike> extends Container<C> {
    decodeWithCharset(charset?: string): ContainerOperator<C, ArrayBuffer, string>;
}
interface Defer<C extends ContainerLike> extends Container<C> {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
}
interface DistinctUntilChanged<C extends ContainerLike> extends Container<C> {
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ContainerOperator<C, T, T>;
}
interface EverySatisfy<C extends ContainerLike> extends Container<C> {
    everySatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
}
interface FromArrayOptions {
    readonly startIndex: Option<number>;
    readonly endIndex: Option<number>;
}
interface FromArray<C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions> extends Container<C> {
    fromArray<T>(options?: Partial<O>): Function1<readonly T[], ContainerOf<C, T>>;
}
interface Generate<C extends ContainerLike> extends Container<C> {
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): ContainerOf<C, T>;
}
interface FromIterable<C extends ContainerLike, O extends Record<string, never> = Record<string, never>> extends Container<C> {
    fromIterable<T>(options?: Partial<O>): Function1<Iterable<T>, ContainerOf<C, T>>;
}
interface FromIterator<C extends ContainerLike, O extends Record<string, unknown> = Record<string, never>> extends Container<C> {
    fromIterator<T, TReturn = any, TNext = unknown>(options?: Partial<O>): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
}
interface Keep<C extends ContainerLike> extends Container<C> {
    keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
}
interface Map<C extends ContainerLike> extends Container<C> {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}
interface Pairwise<C extends ContainerLike> extends Container<C> {
    pairwise<T>(): ContainerOperator<C, T, readonly [
        Option<T>,
        T
    ]>;
}
interface Reduce<C extends ContainerLike> extends Container<C> {
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
}
interface Repeat<C extends ContainerLike> extends Container<C> {
    repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
    repeat<T>(count: number): ContainerOperator<C, T, T>;
    repeat<T>(): ContainerOperator<C, T, T>;
}
interface Scan<C extends ContainerLike> extends Container<C> {
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
}
interface SkipFirst<C extends ContainerLike> extends Container<C> {
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
interface SomeSatisfy<C extends ContainerLike> extends Container<C> {
    someSatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
}
interface TakeFirst<C extends ContainerLike> extends Container<C> {
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
interface TakeLast<C extends ContainerLike> extends Container<C> {
    takeLast<T>(options?: {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
interface TakeWhile<C extends ContainerLike> extends Container<C> {
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
}
interface ThrowIfEmpty<C extends ContainerLike> extends Container<C> {
    throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
}
interface Using<C extends ContainerLike> extends Container<C> {
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
interface Zip<C extends ContainerLike> extends Container<C> {
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
    zip<T>(...enumerables: readonly ContainerOf<C, T>[]): ContainerOf<C, readonly T[]>;
}
declare const compute: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Map<C> & FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Factory<T>, ContainerOf<C, T>>;
declare const concatMap: <C extends ContainerLike, TA, TB, O = Record<string, never>>({ map, concatAll }: Map<C> & ConcatAll<C, O>, mapper: Function1<TA, ContainerOf<C, TB>>, options?: Partial<O> | undefined) => ContainerOperator<C, TA, TB>;
declare const concatWith: <C extends ContainerLike, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>) => ContainerOperator<C, T, T>;
declare const createFromArray: <C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions>(factory: <T>(values: readonly T[], startIndex: number, endIndex: number, options?: Partial<O> | undefined) => ContainerOf<C, T>) => <T_1>(options?: Partial<O>) => Function1<readonly T_1[], ContainerOf<C, T_1>>;
declare const empty: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>({ fromArray }: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => ContainerOf<C, T>;
declare const contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
declare const encodeUtf8: <C extends ContainerLike>(m: Defer<C> & Map<C>) => ContainerOperator<C, string, Uint8Array>;
declare function endWith<C extends ContainerLike, T>(m: Concat<C> & FromArray<C>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const fromOption: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Option<T>, ContainerOf<C, T>>;
declare const fromValue: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>({ fromArray }: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<T, ContainerOf<C, T>>;
declare const genMap: <C extends ContainerLike, TA, TB, OConcatAll extends Record<string, never> = Record<string, never>, OFromIterator extends Record<string, never> = Record<string, never>, TReturn = any, TNext = unknown>(m: Map<C> & ConcatAll<C, OConcatAll> & FromIterator<C, OFromIterator>, mapper: Function1<TA, Generator<TB, TReturn, TNext>>, options?: Partial<OConcatAll & OFromIterator> | undefined) => ContainerOperator<C, TA, TB>;
declare const keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C>) => ContainerOperator<C, unknown, T>;
declare const mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
declare const noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare function startWith<C extends ContainerLike, T>(m: Concat<C> & FromArray<C>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const throws: <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Map<C> & FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Factory<unknown>, ContainerOf<C, T>>;
declare const zipWith: <C extends ContainerLike, TA, TB>({ zip }: Zip<C>, snd: ContainerOf<C, TB>) => ContainerOperator<C, TA, readonly [
    TA,
    TB
]>;
export { AbstractContainer, Buffer, Concat, ConcatAll, Container, ContainerLike, ContainerOf, ContainerOperator, DecodeWithCharset, Defer, DisposableContainer, DistinctUntilChanged, EverySatisfy, FromArray, FromArrayOptions, FromIterable, FromIterator, Generate, Keep, Map, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Using, Zip, compute, concatMap, concatWith, contains, createFromArray, empty, encodeUtf8, endWith, fromOption, fromValue, genMap, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };
