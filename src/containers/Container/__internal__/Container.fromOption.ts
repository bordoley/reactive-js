import {
  ContainerLike,
  ContainerOf,
  FromReadonlyArray,
} from "../../../containers.js";
import { Function1, Optional, isSome, pipe } from "../../../functions.js";

const Container_fromOption =
  <
    C extends ContainerLike,
    O extends { start?: never; count?: never } = {
      start?: never;
      count?: never;
    },
  >(
    fromReadonlyArray: FromReadonlyArray<C, O>["fromReadonlyArray"],
  ) =>
  <T>(options?: O): Function1<Optional<T>, ContainerOf<C, T>> => {
    const { start, count, ...tail } = (options ?? {}) as O & {
      readonly start?: number;
      readonly count?: number;
    };

    return option =>
      pipe(isSome(option) ? [option] : [], fromReadonlyArray(tail as O));
  };

export default Container_fromOption;
