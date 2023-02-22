import {
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Map,
} from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";

const Container_concatMap =
  <C extends ContainerLike>(
    map: Map<C>["map"],
    concatAll: ConcatAll<C>["concatAll"],
  ) =>
  <TA, TB>(
    mapper: Function1<TA, ContainerOf<C, TB>>,
  ): ContainerOperator<C, TA, TB> =>
    compose(map(mapper), concatAll());

export default Container_concatMap;
