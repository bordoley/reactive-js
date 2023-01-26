import { ContainerLike, Zip, ContainerOf, ContainerOperator } from "../../../containers.js";
declare const Container$zipWith: <C extends ContainerLike>({ zip }: Zip<C>, snd: ContainerOf<C, any>, ...tail: readonly ContainerOf<C, any>[]) => ContainerOperator<C, any, any>;
export { Container$zipWith as default };
