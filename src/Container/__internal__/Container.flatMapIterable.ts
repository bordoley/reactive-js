import { Function1, compose } from "../../functions.js";
import { DeferredTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";

const Container_flatMapIterable =
  <C extends Container>(
    concatMap: DeferredTypeClass<C>["concatMap"],
    fromIterable: DeferredTypeClass<C>["fromIterable"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): ContainerOperator<C, TA, TB> =>
    concatMap(compose(selector, fromIterable<TB>()));

export default Container_flatMapIterable;
