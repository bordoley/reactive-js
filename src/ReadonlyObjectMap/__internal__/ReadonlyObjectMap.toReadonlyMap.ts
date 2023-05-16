import ReadonlyMap_fromEntries from "../../ReadonlyMap/__internal__/ReadonlyMap.fromEntries.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { pipe } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap.entries.js";

const ReadonlyObjectMap_toReadonlyMap: ReadonlyObjectMap.Signature["toReadonlyMap"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase>() =>
    (obj: ReadonlyObjectMapLike<TKey, T>) =>
      pipe(obj, ReadonlyObjectMap_entries(), ReadonlyMap_fromEntries());

export default ReadonlyObjectMap_toReadonlyMap;
