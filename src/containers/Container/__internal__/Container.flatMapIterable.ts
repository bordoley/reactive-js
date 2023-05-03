import { Container, ContainerOperator } from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";

const Container_flatMapIterable =
  <C extends Container>(
    concatMap: Container.ConcatMap<C>["concatMap"],
    fromIterable: Container.FromIterable<C>["fromIterable"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): ContainerOperator<C, TA, TB> =>
    concatMap(compose(selector, fromIterable<TB>()));

export default Container_flatMapIterable;
