import { ContainerLike, ContainerOf, FromFactory } from "../../../containers.js";
import { Factory, raise } from "../../../functions.js";
declare const Container_throws: <C extends ContainerLike, O = unknown>(fromFactory: <T>(factory: Factory<T>, options?: O | undefined) => ContainerOf<C, T>) => <T_1>(options?: (O & {
    readonly raise?: Factory<unknown> | undefined;
}) | undefined) => ContainerOf<C, T_1>;
export default Container_throws;
