import { clampPositiveInteger } from "../../../__internal__/math.js";
import { ContainerLike, ContainerOf } from "../../../containers.js";
import {
  Predicate,
  alwaysTrue,
  isNone,
  isNumber,
  lessThan,
} from "../../../functions.js";

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
      ? lessThan(clampPositiveInteger(predicate))
      : predicate;

    return (c: ContainerOf<C, T>) => repeat(c, shouldRepeat);
  };

export default Container_repeat;
