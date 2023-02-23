import {
  ConcatAll,
  ContainerLike,
  ContainerOperator,
  FromIterable,
  IterableLike,
  Map,
} from "../../../containers.js";
import { Function1, compose, pipe } from "../../../functions.js";

const Container_flatMapIterable =
  <C extends ContainerLike, O = never>(
    concatAll: ConcatAll<C, never>["concatAll"],
    fromIterable: FromIterable<C, O>["fromIterable"],
    map: Map<C>["map"],
  ) =>
  <TA, TB>(
    mapper: Function1<TA, IterableLike<TB>>,
    options?: O,
  ): ContainerOperator<C, TA, TB> =>
    compose(
      map(x => pipe(x, mapper, fromIterable<TB>(options))),
      concatAll(),
    );

export default Container_flatMapIterable;
