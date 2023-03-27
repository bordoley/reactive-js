import {
  ConcatMap,
  ContainerLike,
  ContainerOperator,
  FromIterable,
  IterableLike,
} from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";

const Container_flatMapIterable =
  <C extends ContainerLike, O = never>(
    concatMap: ConcatMap<C, never>["concatMap"],
    fromIterable: FromIterable<C, O>["fromIterable"],
  ) =>
  <TA, TB>(
    mapper: Function1<TA, IterableLike<TB>>,
    options?: O,
  ): ContainerOperator<C, TA, TB> =>
    concatMap(compose(mapper, fromIterable<TB>(options)));

export default Container_flatMapIterable;
