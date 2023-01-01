import { ContainerLike, ContainerOperator, Map } from "../../../containers";
import { pipe, returns } from "../../../functions";

const ContainerLike__mapTo = <C extends ContainerLike, TA, TB>(
  { map }: Map<C>,
  value: TB,
): ContainerOperator<C, TA, TB> => pipe(value, returns, map);

export default ContainerLike__mapTo;
