import { ContainerLike, ContainerOf } from "../../../containers";
import { Predicate, alwaysTrue, isNone, isNumber } from "../../../functions";

const Container_repeat =
  <C extends ContainerLike, T>(
    repeat: (
      c: ContainerOf<C, T>,
      predicate: Predicate<number>,
    ) => ContainerOf<C, T>,
  ) =>
  (predicate?: Predicate<number> | number) => {
    const shouldRepeat: Predicate<number> = isNone(predicate)
      ? alwaysTrue
      : isNumber(predicate)
      ? (count: number) => count < predicate
      : (count: number) => predicate(count);

    return (c: ContainerOf<C, T>) => repeat(c, shouldRepeat);
  };

export default Container_repeat;
