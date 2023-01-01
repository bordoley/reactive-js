import {
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Map,
} from "../../../containers";
import { Function1, compose } from "../../../functions";

const ContainerLike__concatMap = <C extends ContainerLike, TA, TB, O = never>(
  { map, concatAll }: Map<C> & ConcatAll<C, O>,
  mapper: Function1<TA, ContainerOf<C, TB>>,
  options?: Partial<O>,
): ContainerOperator<C, TA, TB> => compose(map(mapper), concatAll(options));

export default ContainerLike__concatMap;
