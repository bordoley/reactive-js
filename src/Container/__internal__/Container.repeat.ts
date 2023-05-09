import { clampPositiveInteger } from "../../__internal__/math.js";
import { Container, Containers } from "../../containers.js";
import {
  Predicate,
  alwaysTrue,
  isNone,
  isNumber,
  lessThan,
} from "../../functions.js";

const Container_repeat =
  <C extends Container, T>(
    repeat: (
      c: Containers.Of<C, T>,
      predicate: Predicate<number>,
    ) => Containers.Of<C, T>,
  ) =>
  (predicate?: Predicate<number> | number) => {
    const shouldRepeat: Predicate<number> = isNone(predicate)
      ? alwaysTrue
      : isNumber(predicate)
      ? lessThan(clampPositiveInteger(predicate))
      : predicate;

    return (c: Containers.Of<C, T>) => repeat(c, shouldRepeat);
  };

export default Container_repeat;
