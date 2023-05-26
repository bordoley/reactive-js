import IndexedCollection_toContainer from "../../IndexedCollection/__internal__/IndexedCollection.toContainer.js";
import { newInstance } from "../../functions.js";
import { IndexedCollectionLike, KeyedCollectionLike_get } from "../../types.js";
import type * as IndexedCollection from "./../../IndexedCollection.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

import Collection_getCount from "./Collection.getCount.js";

const IndexedCollection_toReadonlyArray: IndexedCollection.Signature["toReadonlyArray"] =
  /*@__PURE__*/ IndexedCollection_toContainer<
    IndexedCollection.Type,
    ReadonlyArray.Type
  >(
    <T>(
      values: IndexedCollectionLike<T>,
      startIndex: number,
      count: number,
    ) => {
      const result = newInstance<Array<T>, number>(Array, count);
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
    Collection_getCount,
  );

export default IndexedCollection_toReadonlyArray;
