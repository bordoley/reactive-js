import {
  ConcatAll,
  ContainerLike,
  ContainerOperator,
  FromIterable,
  Map,
} from "../../../containers.js";
import { Function1, compose, pipe } from "../../../functions.js";

const Container_genMap = <C extends ContainerLike, TA, TB, O = never>(
  m: ConcatAll<C, never> & Map<C> & FromIterable<C, O>,
  mapper: Function1<TA, Generator<TB, any, any>>,
  options?: O,
): ContainerOperator<C, TA, TB> =>
  compose(
    m.map(x => pipe(x, mapper, m.fromIterable<TB>(options))),
    m.concatAll(),
  );

export default Container_genMap;
