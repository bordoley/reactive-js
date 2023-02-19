import { ZipWith } from "./Container/__internal__/Container.zipWith.js";
import { Factory, Function1, Equality, Optional, TypePredicate, Predicate } from "../functions.js";
import { ContainerLike, Map, FromReadonlyArray, ContainerOf, ConcatAll, ContainerOperator, Concat, SomeSatisfy, Defer, FromIterable, Keep, EverySatisfy } from "../containers.js";
declare const compute: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & FromReadonlyArray<C, O>, factory: Factory<T>, options?: O | undefined) => ContainerOf<C, T>;
declare const concatMap: <C extends ContainerLike, TA, TB>(m: Map<C> & ConcatAll<C>, mapper: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
declare const concatWith: <C extends ContainerLike, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
declare const contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C, never>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
declare const encodeUtf8: <C extends ContainerLike>(m: Defer<C, never> & Map<C, never>) => ContainerOperator<C, string, Uint8Array>;
declare const endWith: <C extends ContainerLike, T>(m: Concat<C> & FromReadonlyArray<C, unknown>, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
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
declare const startWith: <C extends ContainerLike, T>(m: Concat<C> & FromReadonlyArray<C, unknown>, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
declare const throws: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & FromReadonlyArray<C, O>, options?: (O & {
    raise?: Factory<unknown> | undefined;
}) | undefined) => ContainerOf<C, T>;
declare const zipWith: ZipWith;
/** @ignore */
declare const Container: {
    compute: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & FromReadonlyArray<C, O>, factory: Factory<T>, options?: O | undefined) => ContainerOf<C, T>;
    concatMap: <C_1 extends ContainerLike, TA, TB>(m: Map<C_1, never> & ConcatAll<C_1, never>, mapper: Function1<TA, ContainerOf<C_1, TB>>) => ContainerOperator<C_1, TA, TB>;
    concatWith: <C_2 extends ContainerLike, T_1>({ concat }: Concat<C_2>, snd: ContainerOf<C_2, T_1>, ...tail: readonly ContainerOf<C_2, T_1>[]) => ContainerOperator<C_2, T_1, T_1>;
    contains: <C_3 extends ContainerLike, T_2>({ someSatisfy }: SomeSatisfy<C_3, never>, value: T_2, options?: {
        readonly equality?: Equality<T_2> | undefined;
    }) => ContainerOperator<C_3, T_2, boolean>;
    encodeUtf8: <C_4 extends ContainerLike>(m: Defer<C_4, never> & Map<C_4, never>) => ContainerOperator<C_4, string, Uint8Array>;
    endWith: <C_5 extends ContainerLike, T_3>(m: Concat<C_5> & FromReadonlyArray<C_5, unknown>, value: T_3, ...values: readonly T_3[]) => ContainerOperator<C_5, T_3, T_3>;
    fromOption: <C_6 extends ContainerLike, T_4, O_1 extends {
        start?: undefined;
        count?: undefined;
    } = {
        start?: undefined;
        count?: undefined;
    }>({ fromReadonlyArray }: FromReadonlyArray<C_6, O_1>, options?: O_1 | undefined) => Function1<Optional<T_4>, ContainerOf<C_6, T_4>>;
    genMap: <C_7 extends ContainerLike, TA_1, TB_1, OFromIterable = never>(m: ConcatAll<C_7, never> & Map<C_7, never> & FromIterable<C_7, OFromIterable>, mapper: Function1<TA_1, Generator<TB_1, any, any>>, options?: OFromIterable | undefined) => ContainerOperator<C_7, TA_1, TB_1>;
    ignoreElements: <C_8 extends ContainerLike, T_5>({ keep, }: Keep<C_8, never>) => ContainerOperator<C_8, unknown, T_5>;
    keepType: <C_9 extends ContainerLike, TA_2, TB_2 extends TA_2>({ keep }: Keep<C_9, never>, predicate: TypePredicate<TA_2, TB_2>) => ContainerOperator<C_9, TA_2, TB_2>;
    mapTo: <C_10 extends ContainerLike, TA_3, TB_3>({ map }: Map<C_10, never>, value: TB_3) => ContainerOperator<C_10, TA_3, TB_3>;
    noneSatisfy: <C_11 extends ContainerLike, T_6>({ everySatisfy }: EverySatisfy<C_11, never>, predicate: Predicate<T_6>) => ContainerOperator<C_11, T_6, boolean>;
    startWith: <C_12 extends ContainerLike, T_7>(m: Concat<C_12> & FromReadonlyArray<C_12, unknown>, value: T_7, ...values: readonly T_7[]) => ContainerOperator<C_12, T_7, T_7>;
    throws: <C_13 extends ContainerLike, T_8, O_2 = unknown>(m: Map<C_13, never> & FromReadonlyArray<C_13, O_2>, options?: (O_2 & {
        raise?: Factory<unknown> | undefined;
    }) | undefined) => ContainerOf<C_13, T_8>;
    zipWith: ZipWith;
};
export { compute, concatMap, concatWith, contains, Container as default, encodeUtf8, endWith, fromOption, genMap, ignoreElements, keepType, mapTo, noneSatisfy, startWith, throws, zipWith };
