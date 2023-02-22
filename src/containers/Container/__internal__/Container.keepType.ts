import { ContainerLike, ContainerOperator, Keep } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";

const Container_keepType =
  <C extends ContainerLike>(keep: Keep<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): ContainerOperator<C, TA, TB> =>
    keep(predicate) as ContainerOperator<C, TA, TB>;

export default Container_keepType;
