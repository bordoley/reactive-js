import { TypePredicate } from "../../functions.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";

const Container_keepType =
  <C extends Container>(keep: ContainerTypeClass<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): ContainerOperator<C, TA, TB> =>
    keep(predicate) as ContainerOperator<C, TA, TB>;

export default Container_keepType;
