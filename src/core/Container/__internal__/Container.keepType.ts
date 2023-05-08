import { Container, Containers } from "../../../core.js";
import { TypePredicate } from "../../../functions.js";

const Container_keepType =
  <C extends Container>(keep: Containers.TypeClass<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): Containers.Operator<C, TA, TB> =>
    keep(predicate) as Containers.Operator<C, TA, TB>;

export default Container_keepType;
