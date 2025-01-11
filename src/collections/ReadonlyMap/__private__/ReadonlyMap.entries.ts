import { returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_entries: ReadonlyMap.Signature["entries"] =
  /*@__PURE__*/ returns(map => ({
    [Symbol.iterator]() {
      return map.entries();
    },
  }));

export default ReadonlyMap_entries;
