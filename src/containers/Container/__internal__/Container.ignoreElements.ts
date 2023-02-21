import { ContainerLike, ContainerOperator, Keep } from "../../../containers.js";
import { alwaysFalse } from "../../../functions.js";

const Container_ignoreElements = <C extends ContainerLike, T>({
  keep,
}: Keep<C>): ContainerOperator<C, unknown, T> =>
  keep(alwaysFalse) as ContainerOperator<C, unknown, T>;

export default Container_ignoreElements;
