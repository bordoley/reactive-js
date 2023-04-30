import {
  ConcatMap,
  Container,
  ContainerOperator,
  FromIterable,
} from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";

const Container_flatMapIterable =
  <C extends Container>(
    concatMap: ConcatMap<C>["concatMap"],
    fromIterable: FromIterable<C>["fromIterable"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): ContainerOperator<C, TA, TB> =>
    concatMap(compose(selector, fromIterable<TB>()));

export default Container_flatMapIterable;
