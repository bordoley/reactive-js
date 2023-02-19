import { ContainerLike, Map, FromReadonlyArray, ContainerOf } from "../../../containers.js";
import { Factory } from "../../../functions.js";
declare const Container_throws: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & FromReadonlyArray<C, O>, options?: (O & {
    raise?: Factory<unknown> | undefined;
}) | undefined) => ContainerOf<C, T>;
export { Container_throws as default };
