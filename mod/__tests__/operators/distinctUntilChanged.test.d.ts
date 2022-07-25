import { Describe } from "../../__internal__/testing.mjs";
import { Equality, Function1 } from "../../functions.mjs";
import { ContainerLike, Container, ContainerOperator, FromArrayOptions, ContainerOf, ReadonlyArrayLike } from "../../containers.mjs";
declare const distinctUntilChanged: <C extends ContainerLike>(m: Container<C> & {
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T> | undefined;
    } | undefined): ContainerOperator<C, T, T>;
} & {
    fromArray<T_1>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
} & {
    toReadonlyArray<T_2>(options?: undefined): Function1<ContainerOf<C, T_2>, ReadonlyArrayLike<T_2>>;
}) => Describe;
export { distinctUntilChanged };
