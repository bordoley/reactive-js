import { Concat, ContainerLike, ContainerOf, ContainerOperator } from "../../../containers.js";
declare const Container_concatWith: <C extends ContainerLike>(concat: <T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOf<C, T>) => <T_1>(snd: ContainerOf<C, T_1>, ...tail: readonly ContainerOf<C, T_1>[]) => ContainerOperator<C, T_1, T_1>;
export default Container_concatWith;
