import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import { newInstance } from "../../functions.js";
import { Container, Container_T, Container_type } from "../../types.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_getLength from "./ReadonlyArray.getLength.js";

interface IterableContainer extends Container {
  readonly [Container_type]?: Iterable<this[typeof Container_T]>;
}

class ReadonlyArrayIterable<T> {
  constructor(
    readonly values: readonly T[],
    readonly start: number,
    readonly count: number,
  ) {}

  *[Symbol.iterator]() {
    const { values } = this;
    let cnt = this.count;
    let index = this.start;

    while (cnt > 0) {
      yield values[index];
      cnt--;
      index++;
    }

    while (cnt < 0) {
      yield values[index];

      cnt++;
      index--;
    }
  }
}

const ReadonlyArray_toIterable: ReadonlyArray.Signature["toIterable"] =
  /*@__PURE__*/ IndexedCollection_toContainer<
    ReadonlyArray.Type,
    IterableContainer
  >(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      startIndex === 0 && values.length === count
        ? values
        : newInstance(ReadonlyArrayIterable, values, startIndex, count),
    ReadonlyArray_getLength,
  );

export default ReadonlyArray_toIterable;
