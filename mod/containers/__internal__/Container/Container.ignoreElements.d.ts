import { ContainerLike, Keep, ContainerOperator } from "../../../containers.js";
declare const Container$ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C>) => ContainerOperator<C, unknown, T>;
export { Container$ignoreElements as default };
