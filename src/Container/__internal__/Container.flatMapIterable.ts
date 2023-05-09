import { Container, Containers, DeferredTypeClass } from "../../containers.js";
import { Function1, compose } from "../../functions.js";

const Container_flatMapIterable =
  <C extends Container>(
    concatMap: DeferredTypeClass<C>["concatMap"],
    fromIterable: DeferredTypeClass<C>["fromIterable"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): Containers.Operator<C, TA, TB> =>
    concatMap(compose(selector, fromIterable<TB>()));

export default Container_flatMapIterable;
