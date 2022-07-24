import { Option } from '../util/Option.js';
import { Function1, Equality, Predicate, Updater, Factory, Reducer, TypePredicate } from '../util/functions.js';
interface ContainerLike {
    readonly T?: unknown;
    readonly TContainerOf?: unknown;
}
declare type ContainerOf<C extends ContainerLike, T> = C extends {
    readonly TContainerOf?: unknown;
} ? NonNullable<(C & {
    readonly T: T;
})["TContainerOf"]> : {
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
declare type Concat<C extends ContainerLike> = Container<C> & {
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
};
declare type ConcatAll<C extends ContainerLike, O = Record<string, never>> = Container<C> & {
    concatAll: <T>(options?: Partial<O>) => ContainerOperator<C, ContainerOf<C, T>, T>;
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
declare type FromArrayOptions = {
    readonly start: number;
    readonly count: number;
};
declare type FromArray<C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions> = Container<C> & {
    fromArray<T>(options?: Partial<O>): Function1<readonly T[], ContainerOf<C, T>>;
};
declare type FromValue<C extends ContainerLike, TOptions = never> = Container<C> & {
    fromValue<T>(options?: TOptions): Function1<T, ContainerOf<C, T>>;
};
declare type Generate<C extends ContainerLike> = Container<C> & {
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): ContainerOf<C, T>;
};
declare type Keep<C extends ContainerLike> = Container<C> & {
    keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
};
declare type Map<C extends ContainerLike> = Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
};
declare type Pairwise<C extends ContainerLike> = Container<C> & {
    pairwise<T>(): ContainerOperator<C, T, readonly [
        Option<T>,
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
    zip<T>(...enumerables: readonly ContainerOf<C, T>[]): ContainerOf<C, readonly T[]>;
};
declare const compute: <C extends ContainerLike, T, TOptions>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromValue<T_1>(options?: TOptions | undefined): Function1<T_1, ContainerOf<C, T_1>>;
}, options?: TOptions | undefined) => Function1<Factory<T>, ContainerOf<C, T>>;
declare const concatMap: <C extends ContainerLike, TA, TB, O = Record<string, never>>({ map, concatAll }: Container<C> & {
    map<TA_1, TB_1>(mapper: Function1<TA_1, TB_1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    concatAll: <T>(options?: Partial<O> | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
}, mapper: Function1<TA, ContainerOf<C, TB>>, options?: Partial<O> | undefined) => ContainerOperator<C, TA, TB>;
declare const concatWith: <C extends ContainerLike, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>) => ContainerOperator<C, T, T>;
declare const contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
declare function endWith<C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Concat<C> & FromArray<C, O>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const fromOption: <C extends ContainerLike, T, TOptions>({ empty, fromValue }: Container<C> & {
    fromValue<T_1>(options?: TOptions | undefined): Function1<T_1, ContainerOf<C, T_1>>;
} & {
    empty<T_2>(options?: TOptions | undefined): ContainerOf<C, T_2>;
}, options?: TOptions | undefined) => Function1<Option<T>, ContainerOf<C, T>>;
declare const keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C>) => ContainerOperator<C, unknown, T>;
declare const mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C>, value: TB) => ContainerOperator<C, TA, TB>;
declare const noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare function startWith<C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(m: Concat<C> & FromArray<C, O>, value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
declare const throws: <C extends ContainerLike, T, TOptions>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromValue<T_1>(options?: TOptions | undefined): Function1<T_1, ContainerOf<C, T_1>>;
}, options?: TOptions | undefined) => Function1<Factory<unknown>, ContainerOf<C, T>>;
declare const zipWith: <C extends ContainerLike, TA, TB>({ zip }: Zip<C>, snd: ContainerOf<C, TB>) => ContainerOperator<C, TA, readonly [
    TA,
    TB
]>;
export { Buffer, Concat, ConcatAll, Container, ContainerLike, ContainerOf, ContainerOperator, DistinctUntilChanged, Empty, EverySatisfy, FromArray, FromArrayOptions, FromValue, Generate, Keep, Map, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, Zip, compute, concatMap, concatWith, contains, endWith, fromOption, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };
