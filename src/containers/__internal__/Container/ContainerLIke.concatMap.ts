import {
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Map,
} from "../../../containers";
import { Function1, compose } from "../../../functions";

const Container_concatMap = <C extends ContainerLike, TA, TB, O = never>(
  { map, concatAll }: Map<C> & ConcatAll<C, O>,
  mapper: Function1<TA, ContainerOf<C, TB>>,
  options?: O,
): ContainerOperator<C, TA, TB> => compose(map(mapper), concatAll(options));

export default Container_concatMap;
