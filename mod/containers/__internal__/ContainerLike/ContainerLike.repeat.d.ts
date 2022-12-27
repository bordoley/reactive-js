import { ContainerLike, ContainerOf } from "../../../containers.mjs";
import { Predicate } from "../../../functions.mjs";
declare const repeat: <C extends ContainerLike, T>(repeat: (c: ContainerOf<C, T>, predicate: Predicate<number>) => ContainerOf<C, T>) => (predicate?: Predicate<number> | number) => (c: ContainerOf<C, T>) => ContainerOf<C, T>;
export { repeat as default };
