import { Describe } from "../__internal__/testing.mjs";
import { Function1, Equality, Predicate, Reducer, Factory } from "../functions.mjs";
import { ContainerLike, Container, ContainerOperator, ContainerOf, FromArrayOptions, ReadonlyArrayLike } from "../containers.mjs";
declare const concatAllTests: <C extends ContainerLike>(m: Container<C> & {
    concatAll: <T>(options?: Partial<Record<string, never>> | undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const distinctUntilChangedTests: <C extends ContainerLike>(m: Container<C> & {
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T> | undefined;
    } | undefined): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const keepTests: <C extends ContainerLike>(m: Container<C> & {
    keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const mapTests: <C extends ContainerLike>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromArray<T>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T[], ContainerOf<C, T>>;
} & {
    toReadonlyArray<T_1>(options?: undefined): Function1<ContainerOf<C, T_1>, ReadonlyArrayLike<T_1>>;
}) => Describe;
declare const scanTests: <C extends ContainerLike>(m: Container<C> & {
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const skipFirstTests: <C extends ContainerLike>(m: Container<C> & {
    skipFirst<T>(options?: {
        readonly count?: number | undefined;
    } | undefined): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const takeFirstTests: <C extends ContainerLike>(m: Container<C> & {
    takeFirst<T>(options?: {
        readonly count?: number | undefined;
    } | undefined): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const takeLastTests: <C extends ContainerLike>(m: Container<C> & {
    takeLast<T>(options?: {
        readonly count?: number | undefined;
    } | undefined): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const takeWhileTests: <C extends ContainerLike>(m: Container<C> & {
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const zipTests: <C extends ContainerLike>(m: Container<C> & {
    zip<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [
        TA,
        TB
    ]>;
    zip<TA_1, TB_1, TC>(a: ContainerOf<C, TA_1>, b: ContainerOf<C, TB_1>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    zip<TA_2, TB_2, TC_1, TD>(a: ContainerOf<C, TA_2>, b: ContainerOf<C, TB_2>, c: ContainerOf<C, TC_1>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    zip<TA_3, TB_3, TC_2, TD_1, TE>(a: ContainerOf<C, TA_3>, b: ContainerOf<C, TB_3>, c: ContainerOf<C, TC_2>, d: ContainerOf<C, TD_1>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    zip<TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ContainerOf<C, TA_4>, b: ContainerOf<C, TB_4>, c: ContainerOf<C, TC_3>, d: ContainerOf<C, TD_2>, e: ContainerOf<C, TE_1>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    zip<TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ContainerOf<C, TA_5>, b: ContainerOf<C, TB_5>, c: ContainerOf<C, TC_4>, d: ContainerOf<C, TD_3>, e: ContainerOf<C, TE_2>, f: ContainerOf<C, TF_1>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    zip<TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ContainerOf<C, TA_6>, b: ContainerOf<C, TB_6>, c: ContainerOf<C, TC_5>, d: ContainerOf<C, TD_4>, e: ContainerOf<C, TE_3>, f: ContainerOf<C, TF_2>, g: ContainerOf<C, TG_1>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    zip<TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ContainerOf<C, TA_7>, b: ContainerOf<C, TB_7>, c: ContainerOf<C, TC_6>, d: ContainerOf<C, TD_5>, e: ContainerOf<C, TE_4>, f: ContainerOf<C, TF_3>, g: ContainerOf<C, TG_2>, h: ContainerOf<C, TH_1>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [
        TA_7,
        TB_7,
        TC_6,
        TD_5,
        TE_4,
        TF_3,
        TG_2,
        TH_1,
        TI
    ]>;
} & {
    fromArray<T>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T[], ContainerOf<C, T>>;
} & {
    toReadonlyArray<T_1>(options?: undefined): Function1<ContainerOf<C, T_1>, ReadonlyArrayLike<T_1>>;
}) => Describe;
export { concatAllTests, distinctUntilChangedTests, keepTests, mapTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, zipTests };
