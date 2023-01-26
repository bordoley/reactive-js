import { ContainerLike, Keep, ContainerOperator } from "../../../containers.js";
declare const Container_ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C>) => ContainerOperator<C, unknown, T>;
export { Container_ignoreElements as default };
