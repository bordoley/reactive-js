import { Container } from "../../../core.js";
import { Function1, compose } from "../../../functions.js";

const Container_flatMapIterable =
  <C extends Container>(
    concatMap: Container.TypeClass<C>["concatMap"],
    fromIterable: Container.TypeClass<C>["fromIterable"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): Container.Operator<C, TA, TB> =>
    concatMap(compose(selector, fromIterable<TB>()));

export default Container_flatMapIterable;
