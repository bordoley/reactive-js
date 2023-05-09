import { Container, ContainerTypeClass, Containers } from "../../containers.js";
import { TypePredicate } from "../../functions.js";

const Container_keepType =
  <C extends Container>(keep: ContainerTypeClass<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): Containers.Operator<C, TA, TB> =>
    keep(predicate) as Containers.Operator<C, TA, TB>;

export default Container_keepType;
