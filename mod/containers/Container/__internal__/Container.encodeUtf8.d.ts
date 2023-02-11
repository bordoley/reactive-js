import { Factory, Function1 } from "../../../functions.js";
import { ContainerLike, Container, ContainerOf, ContainerOperator } from "../../../containers.js";
declare const Container_encodeUtf8: <C extends ContainerLike>(m: Container<C> & {
    defer<T>(factory: Factory<ContainerOf<C, T>>, options?: undefined): ContainerOf<C, T>;
} & {
    map<TA, TB>(mapper: Function1<TA, TB>, options?: undefined): ContainerOperator<C, TA, TB>;
}) => ContainerOperator<C, string, Uint8Array>;
export { Container_encodeUtf8 as default };
