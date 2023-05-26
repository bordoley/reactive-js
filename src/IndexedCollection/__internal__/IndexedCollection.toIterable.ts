/*
import { newInstance } from "../../functions.js";
import { IndexedCollectionLike, KeyedCollectionLike_get } from "../../types.js";


class IndexedCollectionIterable<T> {
  constructor(
    readonly values: IndexedCollectionLike<T>,
    readonly start: number,
    readonly count: number,
  ) {}

  *[Symbol.iterator]() {
    const { values } = this;
    let cnt = this.count;
    let index = this.start;

    while (cnt > 0) {
      yield values[KeyedCollectionLike_get](index);
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

const IndexedCollection_toIterable: IndexedCollection.Signature["toIterable"] =
  IndexedCollection_toContainer<IterableContainer>(
    <T>(values: readonly T[], startIndex: number, count: number) =>
      startIndex === 0 && values.length === count
        ? values
        : newInstance(IndexedCollectionIterable, values, startIndex, count),
  );

export default IndexedCollection_toIterable;
*/
