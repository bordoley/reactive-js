import { Container, Containers, DeferredContainers } from "../../containers.js";
declare const Container_concatWith: <C extends Container>(concat: <T>(fst: Containers.Of<C, T>, snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]) => Containers.Of<C, T>) => <T_1>(snd: Containers.Of<C, T_1>, ...tail: readonly Containers.Of<C, T_1>[]) => Containers.Operator<C, T_1, T_1>;
export default Container_concatWith;
