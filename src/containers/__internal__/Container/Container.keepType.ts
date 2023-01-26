import { ContainerLike, ContainerOperator, Keep } from "../../../containers";
import { TypePredicate } from "../../../functions";

const Container_keepType = <C extends ContainerLike, TA, TB extends TA>(
  { keep }: Keep<C>,
  predicate: TypePredicate<TA, TB>,
): ContainerOperator<C, TA, TB> =>
  keep(predicate) as ContainerOperator<C, TA, TB>;

export default Container_keepType;
