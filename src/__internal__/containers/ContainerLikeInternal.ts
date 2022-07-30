import { ContainerLike, ContainerOf } from "../../containers";
import { Predicate, alwaysTrue, isNone } from "../../functions";

export const createRepeatOperator =
  <C extends ContainerLike, T>(
    f: (
      c: ContainerOf<C, T>,
      predicate: Predicate<number>,
    ) => ContainerOf<C, T>,
  ) =>
  (predicate?: Predicate<number> | number) => {
    const repeatPredicate: Predicate<number> = isNone(predicate)
      ? alwaysTrue
      : typeof predicate === "number"
      ? (count: number) => count < predicate
      : (count: number) => predicate(count);

    return (c: ContainerOf<C, T>) => f(c, repeatPredicate);
  };
