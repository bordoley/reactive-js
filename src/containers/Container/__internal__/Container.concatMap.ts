import {
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Map,
} from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";

const Container_concatMap = <C extends ContainerLike, TA, TB>(
  m: Map<C> & ConcatAll<C>,
  mapper: Function1<TA, ContainerOf<C, TB>>,
): ContainerOperator<C, TA, TB> => compose(m.map(mapper), m.concatAll());

export default Container_concatMap;
