import { Container } from "../../../core.js";
import { TypePredicate } from "../../../functions.js";

const Container_keepType =
  <C extends Container>(keep: Container.Keep<C>["keep"]) =>
  <TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): Container.Operator<C, TA, TB> =>
    keep(predicate) as Container.Operator<C, TA, TB>;

export default Container_keepType;
