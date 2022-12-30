import { Factory, Function1 } from "../../../functions.mjs";
import { ContainerLike, Container, ContainerOf, ContainerOperator } from "../../../containers.mjs";
declare const encodeUtf8: <C extends ContainerLike>(m: Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}) => ContainerOperator<C, string, Uint8Array>;
export { encodeUtf8 as default };
