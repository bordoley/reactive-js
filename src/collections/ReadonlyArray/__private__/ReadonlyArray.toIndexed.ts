import {
  CollectionLike_count,
  IndexedLike,
  KeyedLike_get,
} from "../../../collections.js";
import { newInstance, pipe, raiseIf } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray.toReadonlyArray.js";

class ReadonlyArrayIndexedCollection<T>
  extends EnumerableIterable<T>
  implements IndexedLike<T>
{
  readonly d: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    super();
    this.d = delegate;
  }
  get [CollectionLike_count](): number {
    return this.d.length;
  }

  [KeyedLike_get](index: number): T {
    raiseIf(index < 0 || index >= this[CollectionLike_count], "out of range");
    return this.d[index];
  }

  [Symbol.iterator](): Iterator<T, any, undefined> {
    return this.d[Symbol.iterator]();
  }
}

const ReadonlyArray_toIndexed: ReadonlyArray.Signature["toIndexed"] =
  <T>(options?: { readonly count?: number; readonly start?: number }) =>
  (arr: ReadonlyArray<T>) => {
    // FIXME: Ideally the implementation would be lazy
    const delegate = pipe(arr, ReadonlyArray_toReadonlyArray<T>(options));
    return newInstance(ReadonlyArrayIndexedCollection<T>, delegate);
  };

export default ReadonlyArray_toIndexed;
