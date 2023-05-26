import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { abs, clamp, min } from "../../__internal__/math.js";
import { Function1 } from "../../functions.js";
import {
  Container,
  ContainerOf,
  KeyedContainer,
  KeyedContainerOf,
} from "../../types.js";

const IndexedCollection_toContainer =
  <CIn extends KeyedContainer<number>, COut extends Container>(
    factory: <T>(
      values: KeyedContainerOf<CIn, number, T>,
      start: number,
      count: number,
    ) => ContainerOf<COut, T>,
    getLength: (c: ContainerOf<CIn, unknown>) => number,
  ) =>
  <T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<KeyedContainerOf<CIn, number, T>, ContainerOf<COut, T>> =>
  values => {
    const valuesLength = getLength(values);
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

export default IndexedCollection_toContainer;
