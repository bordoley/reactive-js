import { ContainerLike, ContainerOf, FromArray } from "../../../containers";
import { Function1, Optional, isSome, pipe } from "../../../functions";

const Container_fromOption =
  <
    C extends ContainerLike,
    T,
    O extends {
      readonly start?: number;
      readonly count?: number;
    } = {
      readonly start?: number;
      readonly count?: number;
    },
  >(
    { fromArray }: FromArray<C, O>,
    // FIXME: How do we omit the start/count options sanely
    options?: O,
  ): Function1<Optional<T>, ContainerOf<C, T>> =>
  option =>
    pipe(isSome(option) ? [option] : [], fromArray<T>(options));

export default Container_fromOption;
