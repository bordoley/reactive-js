import * as Obj from "../../../__internal__/Object.js";
import { returns, Tuple2 } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_fromEntries: ReadonlyObjectMap.Signature["fromEntries"] =
  /*@__PURE__*/ returns((entries: Iterable<Tuple2<string, unknown>>) => {
    const result = Obj.createObjectMap<string, unknown>();

    for (const [key, value] of entries) {
      result[key] = value;
    }

    return result;
  }) as ReadonlyObjectMap.Signature["fromEntries"];

export default ReadonlyObjectMap_fromEntries;
