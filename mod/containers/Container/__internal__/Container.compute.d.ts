import { ContainerLike, Map, FromReadonlyArray, ContainerOf } from "../../../containers.js";
import { Factory } from "../../../functions.js";
declare const Container_compute: <C extends ContainerLike, T, O = unknown>(m: Map<C, never> & FromReadonlyArray<C, O>, factory: Factory<T>, options?: O | undefined) => ContainerOf<C, T>;
export { Container_compute as default };
