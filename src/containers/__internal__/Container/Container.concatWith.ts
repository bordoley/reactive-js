import {
  Concat,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
} from "../../../containers";

const Container_concatWith =
  <C extends ContainerLike, T>(
    { concat }: Concat<C>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOperator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export default Container_concatWith;
