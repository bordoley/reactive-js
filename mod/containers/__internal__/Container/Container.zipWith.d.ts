import { ContainerLike, Zip, ContainerOf, ContainerOperator } from "../../../containers.js";
declare const Container_zipWith: <C extends ContainerLike>({ zip }: Zip<C>, snd: ContainerOf<C, any>, ...tail: readonly ContainerOf<C, any>[]) => ContainerOperator<C, any, any>;
export { Container_zipWith as default };
