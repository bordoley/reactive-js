import { Operator, Factory, Reducer } from "../../functions.ts";
import { enumerate } from "./enumerate.ts";
import { EnumerableLike } from "./interfaces.ts";

/**
 * Applies an accumulator function over the source, returning the accumulated result.
 *
 * @param reducer The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const reduce = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): Operator<EnumerableLike<T>, TAcc> => enumerable => {
  const enumerator = enumerate(enumerable);
  let acc = initialValue();
  while (enumerator.move()) {
    acc = reducer(acc, enumerator.current);
  }
  return acc;
};
