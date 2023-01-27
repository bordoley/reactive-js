import {
  ConcatAll,
  ContainerLike,
  ContainerOperator,
  FromIterable,
  Map,
} from "../../../containers";
import { Function1, compose, pipe } from "../../../functions";

const Container_genMap = <
  C extends ContainerLike,
  TA,
  TB,
  OConcatAll = never,
  OFromIterable = never,
>(
  m: Map<C> & ConcatAll<C, OConcatAll> & FromIterable<C, OFromIterable>,
  mapper: Function1<TA, Generator<TB, any, any>>,
  options?: OConcatAll & OFromIterable,
): ContainerOperator<C, TA, TB> =>
  compose(
    m.map(x => pipe(x, mapper, m.fromIterable<TB>(options))),
    m.concatAll(options),
  );

export default Container_genMap;
