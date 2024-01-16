import { Array_length, Set_add } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_keySet: ReadonlyArray.Signature["keySet"] =
  <TKey extends number>() =>
  (arr: readonly unknown[]) => {
    const result = newInstance(Set<TKey>);

    for (let i = 0; i < arr[Array_length]; i++) {
      result[Set_add](i as TKey);
    }

    return result;
  };

export default ReadonlyArray_keySet;
