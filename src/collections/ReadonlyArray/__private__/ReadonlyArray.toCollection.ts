import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { abs, clamp, min } from "../../../__internal__/math.js";
import { KeyedCollection, KeyedCollectionOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";

const Indexed_toCollection =
  <COut extends KeyedCollection<number>>(
    factory: <T>(
      values: ReadonlyArray<T>,
      start: number,
      count: number,
    ) => KeyedCollectionOf<COut, T>,
  ) =>
  <T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<ReadonlyArray<T>, KeyedCollectionOf<COut, T>> =>
  values => {
    const valuesLength = values.length;
    const { start: startOption, count: countOption = MAX_SAFE_INTEGER } =
      options ?? {};

    const start =
      countOption >= 0
        ? clamp(0, startOption ?? 0, valuesLength)
        : clamp(-1, startOption ?? valuesLength - 1, valuesLength - 1);

    const count =
      countOption >= 0
        ? clamp(0, countOption, valuesLength - start)
        : -min(abs(countOption), start + 1);

    return factory(values, start, count);
  };

export default Indexed_toCollection;
