import { Factory, Function1 } from "../../../functions.js";
import { ContainerLike, Container, ContainerOf, ContainerOperator } from "../../../containers.js";
declare const ContainerLike__encodeUtf8: <C extends ContainerLike>(m: Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}) => ContainerOperator<C, string, Uint8Array>;
export { ContainerLike__encodeUtf8 as default };
