import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import { newInstance } from "../../functions.js";
import {
  Container,
  Container_T,
  Container_type,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";
import Collection_getCount from "./Collection.getCount.js";

interface IterableContainer extends Container {
  readonly [Container_type]?: Iterable<this[typeof Container_T]>;
}

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
      yield values[KeyedCollectionLike_get](index);

      cnt++;
      index--;
    }
  }
}

const IndexedCollection_toIterable: IndexedCollection.Signature["toIterable"] =
  /*@__PURE__*/ IndexedCollection_toContainer<
    IndexedCollection.Type,
    IterableContainer
  >(
    <T>(values: IndexedCollectionLike<T>, startIndex: number, count: number) =>
      newInstance(IndexedCollectionIterable, values, startIndex, count),
    Collection_getCount,
  );

export default IndexedCollection_toIterable;
