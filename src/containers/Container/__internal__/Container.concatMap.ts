import {
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Map,
} from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";

const Container_concatMap =
  <C extends ContainerLike, O = never>(
    map: Map<C>["map"],
    concatAll: ConcatAll<C, O>["concatAll"],
  ) =>
  <TA, TB>(
    selector: Function1<TA, ContainerOf<C, TB>>,
    options?: O,
  ): ContainerOperator<C, TA, TB> =>
    compose(map(selector), concatAll(options));

export default Container_concatMap;
