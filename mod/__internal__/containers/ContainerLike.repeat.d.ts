import { ContainerLike, ContainerOf } from "../../containers.mjs";
import { Predicate } from "../../functions.mjs";
declare const createRepeatOperator: <C extends ContainerLike, T>(f: (c: ContainerOf<C, T>, predicate: Predicate<number>) => ContainerOf<C, T>) => (predicate?: Predicate<number> | number) => (c: ContainerOf<C, T>) => ContainerOf<C, T>;
export { createRepeatOperator };
