import { Describe } from "../__internal__/testing.mjs";
import { Equality, Function1, Predicate, Reducer, Factory } from "../functions.mjs";
import { ContainerLike, Container, ContainerOperator, FromArrayOptions, ContainerOf, ReadonlyArrayLike } from "../containers.mjs";
declare const distinctUntilChangedTest: <C extends ContainerLike>(m: Container<C> & {
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
export { distinctUntilChangedTest, keepTests, mapTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests };
