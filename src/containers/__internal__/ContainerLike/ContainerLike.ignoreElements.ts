import { ContainerLike, ContainerOperator, Keep } from "../../../containers";
import { alwaysFalse } from "../../../functions";

const ContainerLike__ignoreElements = <C extends ContainerLike, T>({
  keep,
}: Keep<C>): ContainerOperator<C, unknown, T> =>
  keep(alwaysFalse) as ContainerOperator<C, unknown, T>;

export default ContainerLike__ignoreElements;
