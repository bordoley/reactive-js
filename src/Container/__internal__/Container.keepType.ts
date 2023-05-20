import { TypePredicate } from "../../functions.js";
import { Container, ContainerModule, ContainerOperator } from "../../types.js";

const Container_keepType =
  <C extends Container>(keep: ContainerModule<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): ContainerOperator<C, TA, TB> =>
    keep(predicate) as ContainerOperator<C, TA, TB>;

export default Container_keepType;
