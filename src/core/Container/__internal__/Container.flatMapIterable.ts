import { Container, Containers, DeferredContainers } from "../../../core.js";
import { Function1, compose } from "../../../functions.js";

const Container_flatMapIterable =
  <C extends Container>(
    concatMap: DeferredContainers.TypeClass<C>["concatMap"],
    fromIterable: Containers.TypeClass<C>["fromIterable"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): Containers.Operator<C, TA, TB> =>
    concatMap(compose(selector, fromIterable<TB>()));

export default Container_flatMapIterable;
