import { Array_length, Map, Map_set } from "../../../__internal__/constants.js";
import { newInstance, returns } from "../../../functions.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

const ReadonlyArray_toReadonlyMap: ReadonlyArray.Signature["toReadonlyMap"] =
  returns((arr: ReadonlyArray<unknown>) => {
    const map = newInstance<Map<number, unknown>>(Map);
    const length = arr[Array_length];

    for (let i = 0; i < length; i++) {
      map[Map_set](i as number, arr[i]);
    }
    return map;
  }) as ReadonlyArray.Signature["toReadonlyMap"];

export default ReadonlyArray_toReadonlyMap;
