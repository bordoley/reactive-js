import { ConcatAll, ContainerLike, ContainerOf, ContainerOperator, FromIterable, Map } from "../containers.js";
import { Function1 } from "../functions.js";
export declare const compute: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & import("../containers.js").FromReadonlyArray<C, O>, factory: import("../functions.js").Factory<T>, options?: O | undefined) => ContainerOf<C, T>;
export declare const concatMap: <C extends ContainerLike, TA, TB>(m: Map<C> & ConcatAll<C>, mapper: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
export declare const concatWith: <C extends ContainerLike, T>({ concat }: import("../containers.js").Concat<C>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
export declare const contains: <C extends ContainerLike, T>({ someSatisfy }: import("../containers.js").SomeSatisfy<C, never>, value: T, options?: {
    readonly equality?: import("../functions.js").Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
export declare const encodeUtf8: <C extends ContainerLike>(m: import("../containers.js").Defer<C, never> & Map<C, never>) => ContainerOperator<C, string, Uint8Array>;
export declare const endWith: <C extends ContainerLike, T>(m: import("../containers.js").Concat<C> & import("../containers.js").FromReadonlyArray<C, unknown>, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
export declare const fromOption: <C extends ContainerLike, T, O extends {
    start?: undefined;
    count?: undefined;
} = {
    start?: undefined;
    count?: undefined;
}>({ fromReadonlyArray }: import("../containers.js").FromReadonlyArray<C, O>, options?: O | undefined) => Function1<import("../functions.js").Optional<T>, ContainerOf<C, T>>;
export declare const genMap: <C extends ContainerLike, TA, TB, OFromIterable = never>(m: ConcatAll<C, never> & Map<C> & FromIterable<C, OFromIterable>, mapper: Function1<TA, Generator<TB, any, any>>, options?: OFromIterable) => ContainerOperator<C, TA, TB>;
export declare const ignoreElements: <C extends ContainerLike, T>({ keep, }: import("../containers.js").Keep<C, never>) => ContainerOperator<C, unknown, T>;
export declare const keepType: <C extends ContainerLike, TA, TB extends TA>({ keep }: import("../containers.js").Keep<C, never>, predicate: import("../functions.js").TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export declare const mapTo: <C extends ContainerLike, TA, TB>({ map }: Map<C, never>, value: TB) => ContainerOperator<C, TA, TB>;
export declare const noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: import("../containers.js").EverySatisfy<C, never>, predicate: import("../functions.js").Predicate<T>) => ContainerOperator<C, T, boolean>;
export declare const startWith: <C extends ContainerLike, T>(m: import("../containers.js").Concat<C> & import("../containers.js").FromReadonlyArray<C, unknown>, value: T, ...values: readonly T[]) => ContainerOperator<C, T, T>;
export declare const throws: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & import("../containers.js").FromReadonlyArray<C, O>, options?: (O & {
    raise?: import("../functions.js").Factory<unknown> | undefined;
}) | undefined) => ContainerOf<C, T>;
export declare const zipWith: import("./Container/__internal__/Container.zipWith.js").ZipWith;
/** @ignore */
declare const Container: {
    compute: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & import("../containers.js").FromReadonlyArray<C, O>, factory: import("../functions.js").Factory<T>, options?: O | undefined) => ContainerOf<C, T>;
    concatMap: <C_1 extends ContainerLike, TA, TB>(m: Map<C_1, never> & ConcatAll<C_1, never>, mapper: Function1<TA, ContainerOf<C_1, TB>>) => ContainerOperator<C_1, TA, TB>;
    concatWith: <C_2 extends ContainerLike, T_1>({ concat }: import("../containers.js").Concat<C_2>, snd: ContainerOf<C_2, T_1>, ...tail: readonly ContainerOf<C_2, T_1>[]) => ContainerOperator<C_2, T_1, T_1>;
    contains: <C_3 extends ContainerLike, T_2>({ someSatisfy }: import("../containers.js").SomeSatisfy<C_3, never>, value: T_2, options?: {
        readonly equality?: import("../functions.js").Equality<T_2> | undefined;
    }) => ContainerOperator<C_3, T_2, boolean>;
    encodeUtf8: <C_4 extends ContainerLike>(m: import("../containers.js").Defer<C_4, never> & Map<C_4, never>) => ContainerOperator<C_4, string, Uint8Array>;
    endWith: <C_5 extends ContainerLike, T_3>(m: import("../containers.js").Concat<C_5> & import("../containers.js").FromReadonlyArray<C_5, unknown>, value: T_3, ...values: readonly T_3[]) => ContainerOperator<C_5, T_3, T_3>;
    fromOption: <C_6 extends ContainerLike, T_4, O_1 extends {
        start?: undefined;
        count?: undefined;
    } = {
        start?: undefined;
        count?: undefined;
    }>({ fromReadonlyArray }: import("../containers.js").FromReadonlyArray<C_6, O_1>, options?: O_1 | undefined) => Function1<import("../functions.js").Optional<T_4>, ContainerOf<C_6, T_4>>;
    genMap: <C_7 extends ContainerLike, TA_1, TB_1, OFromIterable = never>(m: ConcatAll<C_7, never> & Map<C_7, never> & FromIterable<C_7, OFromIterable>, mapper: Function1<TA_1, Generator<TB_1, any, any>>, options?: OFromIterable | undefined) => ContainerOperator<C_7, TA_1, TB_1>;
    ignoreElements: <C_8 extends ContainerLike, T_5>({ keep, }: import("../containers.js").Keep<C_8, never>) => ContainerOperator<C_8, unknown, T_5>;
    keepType: <C_9 extends ContainerLike, TA_2, TB_2 extends TA_2>({ keep }: import("../containers.js").Keep<C_9, never>, predicate: import("../functions.js").TypePredicate<TA_2, TB_2>) => ContainerOperator<C_9, TA_2, TB_2>;
    mapTo: <C_10 extends ContainerLike, TA_3, TB_3>({ map }: Map<C_10, never>, value: TB_3) => ContainerOperator<C_10, TA_3, TB_3>;
    noneSatisfy: <C_11 extends ContainerLike, T_6>({ everySatisfy }: import("../containers.js").EverySatisfy<C_11, never>, predicate: import("../functions.js").Predicate<T_6>) => ContainerOperator<C_11, T_6, boolean>;
    startWith: <C_12 extends ContainerLike, T_7>(m: import("../containers.js").Concat<C_12> & import("../containers.js").FromReadonlyArray<C_12, unknown>, value: T_7, ...values: readonly T_7[]) => ContainerOperator<C_12, T_7, T_7>;
    throws: <C_13 extends ContainerLike, T_8, O_2 = unknown>(m: Map<C_13, never> & import("../containers.js").FromReadonlyArray<C_13, O_2>, options?: (O_2 & {
        raise?: import("../functions.js").Factory<unknown> | undefined;
    }) | undefined) => ContainerOf<C_13, T_8>;
    zipWith: import("./Container/__internal__/Container.zipWith.js").ZipWith;
};
export default Container;
