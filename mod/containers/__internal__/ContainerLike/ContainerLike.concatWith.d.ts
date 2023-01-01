import { ContainerLike, Concat, ContainerOf, ContainerOperator } from "../../../containers.mjs";
declare const ContainerLike__concatWith: <C extends ContainerLike, T>({ concat }: Concat<C>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
export { ContainerLike__concatWith as default };
