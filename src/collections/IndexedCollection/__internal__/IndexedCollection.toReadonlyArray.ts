import { abs } from "../../../__internal__/math.js";
import {
  CollectionLike_count,
  IndexedCollectionLike,
  KeyedCollectionLike_get,
} from "../../../collections.js";
import { newInstance, pick } from "../../../functions.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import IndexedCollection_toCollection from "./IndexedCollection.toCollection.js";

const IndexedCollection_toReadonlyArray: IndexedCollection.Signature["toReadonlyArray"] =
  /*@__PURE__*/ IndexedCollection_toCollection<
    IndexedCollection.Type,
    ReadonlyArray.Type
  >(
    <T>(
      values: IndexedCollectionLike<T>,
      startIndex: number,
      count: number,
    ) => {
      const result = newInstance<Array<T>, number>(Array, abs(count));
      let resultIndex = 0;

      let index = startIndex;
      let cnt = count;

      while (cnt > 0) {
        result[resultIndex] = values[KeyedCollectionLike_get](index);
        cnt--;
        index++;
        resultIndex++;
      }

      while (cnt < 0) {
        result[resultIndex] = values[KeyedCollectionLike_get](index);
        cnt++;
        index--;
        resultIndex++;
      }

      return result;
    },
    pick(CollectionLike_count),
  );

export default IndexedCollection_toReadonlyArray;
