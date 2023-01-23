import { ContainerLike, ContainerOf } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
declare const ContainerLike__repeat: <C extends ContainerLike, T>(repeat: (c: ContainerOf<C, T>, predicate: Predicate<number>) => ContainerOf<C, T>) => (predicate?: Predicate<number> | number) => (c: ContainerOf<C, T>) => ContainerOf<C, T>;
export { ContainerLike__repeat as default };
