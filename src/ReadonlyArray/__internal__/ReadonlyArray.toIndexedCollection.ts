import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { newInstance, pipe, raiseWithDebugMessage } from "../../functions.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../types.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray.toReadonlyArray.js";

class ReadonlyArrayIndexedCollection<T>
  implements IndexedCollectionLike<T>, DelegatingLike<ReadonlyArray<T>>
{
  readonly [DelegatingLike_delegate]: ReadonlyArray<T>;

  constructor(delegate: ReadonlyArray<T>) {
    this[DelegatingLike_delegate] = delegate;
  }
  get [CollectionLike_count](): number {
    return this[DelegatingLike_delegate].length;
  }

  [KeyedCollectionLike_get](index: number): T {
    if (index < 0 || index >= this[CollectionLike_count]) {
      raiseWithDebugMessage("out of range");
    }
    return this[DelegatingLike_delegate][index];
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
