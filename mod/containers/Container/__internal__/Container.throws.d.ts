import { ContainerLike, ContainerOf, FromReadonlyArray, Map } from "../../../containers.js";
import { Factory, raise } from "../../../functions.js";
declare const Container_throws: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & FromReadonlyArray<C, O>, options?: (O & {
    raise?: Factory<unknown> | undefined;
}) | undefined) => ContainerOf<C, T>;
export default Container_throws;
