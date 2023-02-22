import { ContainerLike, ContainerOperator, Keep } from "../../../containers.js";
declare const Container_ignoreElements: <C extends ContainerLike, T>({ keep, }: Keep<C, never>) => ContainerOperator<C, unknown, T>;
export default Container_ignoreElements;
