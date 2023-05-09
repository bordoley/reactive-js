import { clampPositiveInteger } from "../../__internal__/math.js";
import { Container } from "../../containers.js";
import {
  Predicate,
  alwaysTrue,
  isNone,
  isNumber,
  lessThan,
} from "../../functions.js";

const Container_repeat =
  <C extends Container.Type, T>(
    repeat: (
      c: Container.Of<C, T>,
      predicate: Predicate<number>,
    ) => Container.Of<C, T>,
  ) =>
  (predicate?: Predicate<number> | number) => {
    const shouldRepeat: Predicate<number> = isNone(predicate)
      ? alwaysTrue
      : isNumber(predicate)
      ? lessThan(clampPositiveInteger(predicate))
      : predicate;

    return (c: Container.Of<C, T>) => repeat(c, shouldRepeat);
  };

export default Container_repeat;
