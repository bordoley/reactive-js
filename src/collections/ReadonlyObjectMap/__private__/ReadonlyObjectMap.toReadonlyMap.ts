import { ReadonlyObjectMapLike } from "../../../collections.js";
import { pipe, returns } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap.entries.js";

const ReadonlyObjectMap_toReadonlyMap: ReadonlyObjectMap.Signature["toReadonlyMap"] =
  /*@__PURE__*/ returns((obj: ReadonlyObjectMapLike) =>
    pipe(obj, ReadonlyObjectMap_entries<any, any>(), ReadonlyMap.fromEntries()),
  );

export default ReadonlyObjectMap_toReadonlyMap;
