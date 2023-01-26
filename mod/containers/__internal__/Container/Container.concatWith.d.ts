import { ContainerLike, Concat, ContainerOf, ContainerOperator } from "../../../containers.js";
declare const Container$concatWith: <C extends ContainerLike, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
export { Container$concatWith as default };
