import { ContainerLike, Zip, ContainerOf, ContainerOperator } from "../../../containers.mjs";
declare const zipWith: <C extends ContainerLike>({ zip }: Zip<C>, snd: ContainerOf<C, any>, ...tail: readonly ContainerOf<C, any>[]) => ContainerOperator<C, any, any>;
export { zipWith as default };
