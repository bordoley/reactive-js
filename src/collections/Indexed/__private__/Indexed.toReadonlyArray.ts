import { abs } from "../../../__internal__/math.js";
import {
  CollectionLike_count,
  IndexedLike,
  KeyedLike_get,
} from "../../../collections.js";
import { newInstance, pick } from "../../../functions.js";
import type * as Indexed from "../../Indexed.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";
import Indexed_toCollection from "./Indexed.toCollection.js";

const Indexed_toReadonlyArray: Indexed.Signature["toReadonlyArray"] =
  /*@__PURE__*/ Indexed_toCollection<Indexed.Type, ReadonlyArray.Type>(
    <T>(values: IndexedLike<T>, startIndex: number, count: number) => {
      const result = newInstance<Array<T>, number>(Array, abs(count));
      let resultIndex = 0;

      let index = startIndex;
      let cnt = count;

      while (cnt > 0) {
        result[resultIndex] = values[KeyedLike_get](index);
        cnt--;
        index++;
        resultIndex++;
      }

      while (cnt < 0) {
        result[resultIndex] = values[KeyedLike_get](index);
        cnt++;
        index--;
        resultIndex++;
      }

      return result;
    },
    pick(CollectionLike_count),
  );

export default Indexed_toReadonlyArray;
