import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import {
  newInstance,
  pipe,
  raiseWithDebugMessage,
} from "../../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray.toReadonlyArray.js";

class ReadonlyArrayIndexedCollection<T> implements IndexedCollectionLike<T> {
  readonly d: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    this.d = delegate;
  }
  get [CollectionLike_count](): number {
    return this.d.length;
  }

  [KeyedCollectionLike_get](index: number): T {
    if (index < 0 || index >= this[CollectionLike_count]) {
      raiseWithDebugMessage("out of range");
    }
    return this.d[index];
  }
}

const ReadonlyArray_toIndexedCollection: ReadonlyArray.Signature["toIndexedCollection"] =

    <T>(options?: { readonly count?: number; readonly start?: number }) =>
    (arr: ReadonlyArray<T>) => {
      // FIXME: Ideally the implementation would be lazy
      const delegate = pipe(arr, ReadonlyArray_toReadonlyArray<T>(options));
      return newInstance(ReadonlyArrayIndexedCollection<T>, delegate);
    };

export default ReadonlyArray_toIndexedCollection;
