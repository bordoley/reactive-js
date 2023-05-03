import { Container, ContainerOperator } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";

const Container_keepType =
  <C extends Container>(keep: Container.Keep<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): ContainerOperator<C, TA, TB> =>
    keep(predicate) as ContainerOperator<C, TA, TB>;

export default Container_keepType;
