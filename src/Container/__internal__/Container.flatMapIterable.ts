import { Function1, compose } from "../../functions.js";
import { Container, Containers, DeferredContainers } from "../../types.js";

const Container_flatMapIterable =
  <C extends Container>(
    concatMap: DeferredContainers.TypeClass<C>["concatMap"],
    fromIterable: DeferredContainers.TypeClass<C>["fromIterable"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): Containers.Operator<C, TA, TB> =>
    concatMap(compose(selector, fromIterable<TB>()));

export default Container_flatMapIterable;
