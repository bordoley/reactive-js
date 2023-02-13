import { ZipWith } from "./Container/__internal__/Container.zipWith.js";
import { Function1, Factory, Equality, Optional, TypePredicate, Predicate } from "../functions.js";
import { ContainerLike, Container as Container$1, ContainerOperator, ContainerOf, Map, ConcatAll, Concat, SomeSatisfy, FromReadonlyArray, FromIterable, Keep, EverySatisfy } from "../containers.js";
declare const compute: <C extends ContainerLike, T, O = unknown>(m: Container$1<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>, options?: undefined): ContainerOperator<C, TA, TB>;
} & {
    fromReadonlyArray<T_1>(options?: (O & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, factory: Factory<T>, options?: O | undefined) => ContainerOf<C, T>;
declare const concatMap: <C extends ContainerLike, TA, TB>(m: Map<C> & ConcatAll<C>, mapper: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
declare const concatWith: <C extends ContainerLike, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
declare const contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C, never>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
declare const encodeUtf8: <C extends ContainerLike>(m: Container$1<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>, options?: undefined): ContainerOf<C, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>, options?: undefined): ContainerOperator<C, TA, TB>;
}) => ContainerOperator<C, string, Uint8Array>;
declare const endWith: <C extends ContainerLike, T>(m: Container$1<C> & {
    concat<T_1>(fst: ContainerOf<C, T_1>, snd: ContainerOf<C, T_1>, ...tail: readonly ContainerOf<C, T_1>[]): ContainerOf<C, T_1>;
} & {
    fromReadonlyArray<T_2>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined): Function1<readonly T_2[], ContainerOf<C, T_2>>;
}, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const fromOption: <C extends ContainerLike, T, O extends {
    start?: undefined;
    count?: undefined;
} = {
    start?: undefined;
    count?: undefined;
}>({ fromReadonlyArray }: FromReadonlyArray<C, O>, options?: O | undefined) => Function1<Optional<T>, ContainerOf<C, T>>;
declare const genMap: <C extends ContainerLike, TA, TB, OFromIterable = never>(m: ConcatAll<C, never> & Map<C> & FromIterable<C, OFromIterable>, mapper: Function1<TA, Generator<TB, any, any>>, options?: OFromIterable) => ContainerOperator<C, TA, TB>;
declare const ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C, never>) => ContainerOperator<C, unknown, T>;
declare const keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: Keep<C, never>, predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
declare const mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C, never>, value: TB) => ContainerOperator<C, TA, TB>;
declare const noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C, never>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare const startWith: <C extends ContainerLike, T>(m: Container$1<C> & {
    concat<T_1>(fst: ContainerOf<C, T_1>, snd: ContainerOf<C, T_1>, ...tail: readonly ContainerOf<C, T_1>[]): ContainerOf<C, T_1>;
} & {
    fromReadonlyArray<T_2>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined): Function1<readonly T_2[], ContainerOf<C, T_2>>;
}, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const throws: <C extends ContainerLike, T, O = unknown>(m: Container$1<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>, options?: undefined): ContainerOperator<C, TA, TB>;
} & {
    fromReadonlyArray<T_1>(options?: (O & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, options?: (O & {
    raise?: Factory<unknown> | undefined;
}) | undefined) => ContainerOf<C, T>;
declare const zipWith: ZipWith;
/** @ignore */
declare const Container: {
    compute: <C extends ContainerLike, T, O = unknown>(m: Container$1<C> & {
        map<TA, TB>(mapper: Function1<TA, TB>, options?: undefined): ContainerOperator<C, TA, TB>;
    } & {
        fromReadonlyArray<T_1>(options?: (O & {
            readonly start?: number | undefined;
            readonly count?: number | undefined;
        }) | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
    }, factory: Factory<T>, options?: O | undefined) => ContainerOf<C, T>;
    concatMap: <C_1 extends ContainerLike, TA_1, TB_1>(m: Container$1<C_1> & {
        map<TA_2, TB_2>(mapper: Function1<TA_2, TB_2>, options?: undefined): ContainerOperator<C_1, TA_2, TB_2>;
    } & {
        concatAll: <T_2>(options?: undefined) => ContainerOperator<C_1, ContainerOf<C_1, T_2>, T_2>;
    }, mapper: Function1<TA_1, ContainerOf<C_1, TB_1>>) => ContainerOperator<C_1, TA_1, TB_1>;
    concatWith: <C_2 extends ContainerLike, T_3>({ concat }: Concat<C_2>, snd: ContainerOf<C_2, T_3>, ...tail: readonly ContainerOf<C_2, T_3>[]) => ContainerOperator<C_2, T_3, T_3>;
    contains: <C_3 extends ContainerLike, T_4>({ someSatisfy }: SomeSatisfy<C_3, never>, value: T_4, options?: {
        readonly equality?: Equality<T_4> | undefined;
    }) => ContainerOperator<C_3, T_4, boolean>;
    encodeUtf8: <C_4 extends ContainerLike>(m: Container$1<C_4> & {
        defer<T_5>(factory: Factory<ContainerOf<C_4, T_5>>, options?: undefined): ContainerOf<C_4, T_5>;
    } & {
        map<TA_3, TB_3>(mapper: Function1<TA_3, TB_3>, options?: undefined): ContainerOperator<C_4, TA_3, TB_3>;
    }) => ContainerOperator<C_4, string, Uint8Array>;
    endWith: <C_5 extends ContainerLike, T_6>(m: Container$1<C_5> & {
        concat<T_7>(fst: ContainerOf<C_5, T_7>, snd: ContainerOf<C_5, T_7>, ...tail: readonly ContainerOf<C_5, T_7>[]): ContainerOf<C_5, T_7>;
    } & {
        fromReadonlyArray<T_8>(options?: {
            readonly start?: number | undefined;
            readonly count?: number | undefined;
        } | undefined): Function1<readonly T_8[], ContainerOf<C_5, T_8>>;
    }, value: T_6, ...values: readonly T_6[]) => ContainerOperator<C_5, T_6, T_6>;
    fromOption: <C_6 extends ContainerLike, T_9, O_1 extends {
        start?: undefined;
        count?: undefined;
    } = {
        start?: undefined;
        count?: undefined;
    }>({ fromReadonlyArray }: FromReadonlyArray<C_6, O_1>, options?: O_1 | undefined) => Function1<Optional<T_9>, ContainerOf<C_6, T_9>>;
    genMap: <C_7 extends ContainerLike, TA_4, TB_4, OFromIterable = never>(m: Container$1<C_7> & {
        concatAll: <T_10>(options?: undefined) => ContainerOperator<C_7, ContainerOf<C_7, T_10>, T_10>;
    } & {
        map<TA_5, TB_5>(mapper: Function1<TA_5, TB_5>, options?: undefined): ContainerOperator<C_7, TA_5, TB_5>;
    } & {
        fromIterable<T_11>(options?: OFromIterable | undefined): Function1<Iterable<T_11>, ContainerOf<C_7, T_11>>;
    }, mapper: Function1<TA_4, Generator<TB_4, any, any>>, options?: OFromIterable | undefined) => ContainerOperator<C_7, TA_4, TB_4>;
    ignoreElements: <C_8 extends ContainerLike, T_12>({ keep, }: Keep<C_8, never>) => ContainerOperator<C_8, unknown, T_12>;
    keepType: <C_9 extends ContainerLike, TA_6, TB_6 extends TA_6>({ keep }: Keep<C_9, never>, predicate: TypePredicate<TA_6, TB_6>) => ContainerOperator<C_9, TA_6, TB_6>;
    mapTo: <C_10 extends ContainerLike, TA_7, TB_7>({ map }: Map<C_10, never>, value: TB_7) => ContainerOperator<C_10, TA_7, TB_7>;
    noneSatisfy: <C_11 extends ContainerLike, T_13>({ everySatisfy }: EverySatisfy<C_11, never>, predicate: Predicate<T_13>) => ContainerOperator<C_11, T_13, boolean>;
    startWith: <C_12 extends ContainerLike, T_14>(m: Container$1<C_12> & {
        concat<T_15>(fst: ContainerOf<C_12, T_15>, snd: ContainerOf<C_12, T_15>, ...tail: readonly ContainerOf<C_12, T_15>[]): ContainerOf<C_12, T_15>;
    } & {
        fromReadonlyArray<T_16>(options?: {
            readonly start?: number | undefined;
            readonly count?: number | undefined;
        } | undefined): Function1<readonly T_16[], ContainerOf<C_12, T_16>>;
    }, value: T_14, ...values: readonly T_14[]) => ContainerOperator<C_12, T_14, T_14>;
    throws: <C_13 extends ContainerLike, T_17, O_2 = unknown>(m: Container$1<C_13> & {
        map<TA_8, TB_8>(mapper: Function1<TA_8, TB_8>, options?: undefined): ContainerOperator<C_13, TA_8, TB_8>;
    } & {
        fromReadonlyArray<T_18>(options?: (O_2 & {
            readonly start?: number | undefined;
            readonly count?: number | undefined;
        }) | undefined): Function1<readonly T_18[], ContainerOf<C_13, T_18>>;
    }, options?: (O_2 & {
        raise?: Factory<unknown> | undefined;
    }) | undefined) => ContainerOf<C_13, T_17>;
    zipWith: ZipWith;
};
export { compute, concatMap, concatWith, contains, Container as default, encodeUtf8, endWith, fromOption, genMap, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };
