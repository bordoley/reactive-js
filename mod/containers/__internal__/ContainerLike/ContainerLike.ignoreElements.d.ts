import { ContainerLike, Keep, ContainerOperator } from "../../../containers.mjs";
declare const ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C>) => ContainerOperator<C, unknown, T>;
export { ignoreElements as default };
