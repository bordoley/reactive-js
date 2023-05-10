import { Predicate } from "../../functions.js";
import { Container, ContainerOf } from "../../types.js";
declare const Container_repeat: <C extends Container, T>(repeat: (c: ContainerOf<C, T>, predicate: Predicate<number>) => ContainerOf<C, T>) => (predicate?: Predicate<number> | number) => (c: ContainerOf<C, T>) => ContainerOf<C, T>;
export default Container_repeat;
