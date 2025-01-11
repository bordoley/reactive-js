import { returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_values: ReadonlyMap.Signature["values"] =
  /*@__PURE__*/ returns(map => ({
    [Symbol.iterator]() {
      return map.values();
    },
  }));

export default ReadonlyMap_values;
