import {
  CollectionLike_count,
  EnumerableLike_enumerate,
  IndexedLike,
  KeyedLike_get,
} from "../../../collections.js";
import {
  newInstance,
  pipe,
  raiseWithDebugMessage,
} from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray.toReadonlyArray.js";

class ReadonlyArrayIndexedCollection<T> implements IndexedLike<T> {
  readonly d: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    this.d = delegate;
  }
  get [CollectionLike_count](): number {
    return this.d.length;
  }

  [KeyedLike_get](index: number): T {
    if (index < 0 || index >= this[CollectionLike_count]) {
      raiseWithDebugMessage("out of range");
    }
    return this.d[index];
  }

  [EnumerableLike_enumerate]() {
    return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
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
