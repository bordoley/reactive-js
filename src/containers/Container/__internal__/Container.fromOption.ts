import { ContainerLike, ContainerOf, FromArray } from "../../../containers";
import { Function1, Optional, isSome, pipe } from "../../../functions";

const Container_fromOption = <
  C extends ContainerLike,
  T,
  O extends { start?: never; count?: never } = {
    start?: never;
    count?: never;
  },
>(
  { fromArray }: FromArray<C, O>,
  options?: O,
): Function1<Optional<T>, ContainerOf<C, T>> => {
  const { start, count, ...tail } = (options ?? {}) as O & {
    readonly start?: number;
    readonly count?: number;
  };

  return option => pipe(isSome(option) ? [option] : [], fromArray(tail as O));
};

export default Container_fromOption;
