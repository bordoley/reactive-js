import { returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_keys: ReadonlyMap.Signature["keys"] = /*@__PURE__*/ returns(
  map => ({
    [Symbol.iterator]() {
      return map.keys();
    },
  }),
);

export default ReadonlyMap_keys;
