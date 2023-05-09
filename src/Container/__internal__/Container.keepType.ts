import { TypePredicate } from "../../functions.js";
import { Container, Containers } from "../../types.js";

const Container_keepType =
  <C extends Container>(keep: Containers.TypeClass<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): Containers.Operator<C, TA, TB> =>
    keep(predicate) as Containers.Operator<C, TA, TB>;

export default Container_keepType;
