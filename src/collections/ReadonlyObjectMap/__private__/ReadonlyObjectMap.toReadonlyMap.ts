import { ReadonlyObjectMapLike } from "../../../collections.js";
import { pipe } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap.entries.js";

const ReadonlyObjectMap_toReadonlyMap: ReadonlyObjectMap.Signature["toReadonlyMap"] =

    <T, TKey extends ReadonlyObjectMap.TKeyBase>() =>
    (obj: ReadonlyObjectMapLike<TKey, T>) =>
      pipe(obj, ReadonlyObjectMap_entries(), ReadonlyMap.fromEntries());

export default ReadonlyObjectMap_toReadonlyMap;
