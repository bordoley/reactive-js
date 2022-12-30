import { ObservableLike, AsyncReducer } from "../rx.mjs";
import { Describe } from "./testing.mjs";
import { Function1, Factory, Equality, Predicate, SideEffect1, Reducer } from "../functions.mjs";
import { ContainerLike, Container, ContainerOperator, FromArrayOptions, ContainerOf, ReadonlyArrayLike, FromArray } from "../containers.mjs";
declare const bufferTests: <C extends ContainerLike>(m: Container<C> & {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<C, T, readonly T[]>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const catchErrorTests: <C extends ContainerLike>(m: Container<C> & {
    catchError<T>(onError: Function1<unknown, void | ContainerOf<C, T>>): ContainerOperator<C, T, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const concatTests: <C extends ContainerLike>(m: Container<C> & {
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const concatAllTests: <C extends ContainerLike>(m: Container<C> & {
    concatAll: <T>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T>, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const decodeWithCharsetTests: <C extends ContainerLike>(m: Container<C> & {
    decodeWithCharset(charset?: string | undefined): ContainerOperator<C, ArrayBuffer, string>;
} & {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
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
declare const everySatisfyTests: <C extends ContainerLike>(m: Container<C> & {
    everySatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const forEachTests: <C extends ContainerLike>(m: Container<C> & {
    forEach<T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
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
declare const pairwiseTests: <C extends ContainerLike>(m: Container<C> & {
    pairwise<T>(): ContainerOperator<C, T, readonly [
        T,
        T
    ]>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const reduceTests: <C extends ContainerLike>(m: Container<C> & {
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const repeatTests: <C extends ContainerLike>(m: Container<C> & {
    repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
    repeat<T_1>(count: number): ContainerOperator<C, T_1, T_1>;
    repeat<T_2>(): ContainerOperator<C, T_2, T_2>;
} & {
    fromArray<T_3>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_3[], ContainerOf<C, T_3>>;
} & {
    takeFirst<T_4>(options?: {
        readonly count?: number | undefined;
    } | undefined): ContainerOperator<C, T_4, T_4>;
} & {
    toReadonlyArray<T_5>(options?: undefined): Function1<ContainerOf<C, T_5>, ReadonlyArrayLike<T_5>>;
}) => Describe;
declare const scanTests: <C extends ContainerLike>(m: Container<C> & {
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const scanAsyncTests: <C extends ContainerLike, CInner extends ObservableLike<unknown>>(m: Container<C> & {
    scanAsync: <T, TAcc>(scanner: AsyncReducer<CInner, T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions & {
        delay: number;
    }> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}, mInner: FromArray<CInner, FromArrayOptions & {
    delay: number;
}>) => Describe;
declare const skipFirstTests: <C extends ContainerLike>(m: Container<C> & {
    skipFirst<T>(options?: {
        readonly count?: number | undefined;
    } | undefined): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const someSatisfyTests: <C extends ContainerLike>(m: Container<C> & {
    someSatisfy<T>(predicate: Predicate<T>): ContainerOperator<C, T, boolean>;
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
    fromArray<T>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T[], ContainerOf<C, T>>;
} & {
    takeWhile<T_1>(predicate: Predicate<T_1>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined): ContainerOperator<C, T_1, T_1>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
declare const throwIfEmptyTests: <C extends ContainerLike>(m: Container<C> & {
    fromArray<T>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T[], ContainerOf<C, T>>;
} & {
    throwIfEmpty<T_1>(factory: Factory<unknown>): ContainerOperator<C, T_1, T_1>;
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
export { bufferTests, catchErrorTests, concatAllTests, concatTests, decodeWithCharsetTests, distinctUntilChangedTests, everySatisfyTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, repeatTests, scanAsyncTests, scanTests, skipFirstTests, someSatisfyTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests };
