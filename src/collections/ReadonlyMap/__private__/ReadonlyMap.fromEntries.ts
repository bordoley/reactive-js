import { Map, Map_set } from "../../../__internal__/constants.js";
import { Tuple2, newInstance, returns } from "../../../functions.js";
import type * as ReadonlyMap from "./../../ReadonlyMap.js";

const ReadonlyMap_fromEntries: ReadonlyMap.Signature["fromEntries"] =
  /*@__PURE__*/ returns((entries: Iterable<Tuple2<unknown, unknown>>) => {
    const map = newInstance(Map<unknown, unknown>);

    for (const [key, value] of entries) {
      map[Map_set](key, value);
    }

    return map;
  }) as ReadonlyMap.Signature["fromEntries"];

export default ReadonlyMap_fromEntries;
