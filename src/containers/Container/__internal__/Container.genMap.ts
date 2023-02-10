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
  OFromIterable = never,
>(
  m: ConcatAll<C, never> & Map<C> & FromIterable<C, OFromIterable>,
  mapper: Function1<TA, Generator<TB, any, any>>,
  options?: OFromIterable,
): ContainerOperator<C, TA, TB> =>
  compose(
    m.map(x => pipe(x, mapper, m.fromIterable<TB>(options))),
    m.concatAll(),
  );

export default Container_genMap;
