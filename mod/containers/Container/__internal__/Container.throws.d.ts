import { Function1, Factory } from "../../../functions.js";
import { ContainerLike, Container, ContainerOperator, ContainerOf } from "../../../containers.js";
declare const Container_throws: <C extends ContainerLike, T, O = unknown>(m: Container<C> & {
    map<TA, TB>(mapper: Function1<TA, TB>, options?: undefined): ContainerOperator<C, TA, TB>;
} & {
    fromReadonlyArray<T_1>(options?: (O & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined): Function1<readonly T_1[], ContainerOf<C, T_1>>;
}, options?: (O & {
    raise?: Factory<unknown> | undefined;
}) | undefined) => ContainerOf<C, T>;
export { Container_throws as default };
