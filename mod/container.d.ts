import { Function1, Equality, Updater, Factory, Predicate, Reducer, TypePredicate } from "./functions.mjs";
import { Option } from "./option.mjs";
interface ContainerLike {
    readonly T?: unknown;
    readonly type?: unknown;
}
declare abstract class AbstractContainer implements ContainerLike {
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
interface Concat<C extends ContainerLike> extends Container<C> {
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
}
interface ConcatAll<C extends ContainerLike, O = {}> extends Container<C> {
    concatAll: <T>(options?: Partial<O>) => ContainerOperator<C, ContainerOf<C, T>, T>;
}
interface DistinctUntilChanged<C extends ContainerLike> extends Container<C> {
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ContainerOperator<C, T, T>;
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
interface FromIterable<C extends ContainerLike, O extends {} = {}> extends Container<C> {
    fromIterable<T>(options?: Partial<O>): Function1<Iterable<T>, ContainerOf<C, T>>;
}
interface FromIterator<C extends ContainerLike, O extends {} = {}> extends Container<C> {
    fromIterator<T, TReturn = any, TNext = unknown>(options?: Partial<O>): Function1<Factory<Iterator<T, TReturn, TNext>>, ContainerOf<C, T>>;
}
interface Keep<C extends ContainerLike> extends Container<C> {
    keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
}
interface Map<C extends ContainerLike> extends Container<C> {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}
interface Pairwise<C extends ContainerLike> extends Container<C> {
    pairwise<T>(): ContainerOperator<C, T, [
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
interface Zip<C extends ContainerLike> extends Container<C> {
    zip<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, [
        TA,
        TB
    ]>;
    zip<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, [
        TA,
        TB,
        TC
    ]>;
    zip<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, [
        TA,
        TB,
        TC,
        TD
    ]>;
    zip<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, [
        TA,
        TB,
        TC,
        TD,
        TE
    ]>;
    zip<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, [
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
}
declare const compute: <C, T, O extends FromArrayOptions = FromArrayOptions>(m: Map<C> & FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Factory<T>, ContainerOf<C, T>>;
declare const concatMap: <C, TA, TB, O = {}>({ map, concatAll }: Map<C> & ConcatAll<C, O>, mapper: Function1<TA, ContainerOf<C, TB>>, options?: Partial<O> | undefined) => ContainerOperator<C, TA, TB>;
declare const concatWith: <C, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>) => ContainerOperator<C, T, T>;
declare const empty: <C, T, O extends FromArrayOptions = FromArrayOptions>({ fromArray }: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => ContainerOf<C, T>;
declare function endWith<C, T>(m: Concat<C> & FromArray<C, FromArrayOptions>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const fromOption: <C, T, O extends FromArrayOptions = FromArrayOptions>(m: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Option<T>, ContainerOf<C, T>>;
declare const fromValue: <C, T, O extends FromArrayOptions = FromArrayOptions>({ fromArray }: FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<T, ContainerOf<C, T>>;
declare const genMap: <C, TA, TB, OConcatAll extends {} = {}, OFromIterator extends {} = {}, TReturn = any, TNext = unknown>(m: Map<C> & ConcatAll<C, OConcatAll> & FromIterator<C, OFromIterator>, mapper: Function1<TA, Generator<TB, TReturn, TNext>>, options?: Partial<OConcatAll & OFromIterator> | undefined) => ContainerOperator<C, TA, TB>;
declare const keepType: <C, TA, TB extends TA>({ keep }: Keep<C>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const ignoreElements: <C, T>({ keep, }: Keep<C>) => ContainerOperator<C, unknown, T>;
declare const mapTo: <C, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
declare function startWith<C, T>(m: Concat<C> & FromArray<C, FromArrayOptions>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const throws: <C, T, O extends FromArrayOptions = FromArrayOptions>(m: Map<C> & FromArray<C, O>, options?: Omit<Partial<O>, keyof FromArrayOptions> | undefined) => Function1<Factory<unknown>, ContainerOf<C, T>>;
declare const zipWith: <C, TA, TB>({ zip }: Zip<C>, snd: ContainerOf<C, TB>) => ContainerOperator<C, TA, [
    TA,
    TB
]>;
export { AbstractContainer, Concat, ConcatAll, Container, ContainerLike, ContainerOf, ContainerOperator, DistinctUntilChanged, FromArray, FromArrayOptions, FromIterable, FromIterator, Generate, Keep, Map, Pairwise, Reduce, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, Zip, compute, concatMap, concatWith, empty, endWith, fromOption, fromValue, genMap, ignoreElements, keepType, mapTo, startWith, throws, zipWith };
