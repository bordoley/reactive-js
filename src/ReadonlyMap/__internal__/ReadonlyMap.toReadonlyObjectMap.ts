import type * as ReadonlyMap from "../../ReadonlyMap.js";
import ReadonlyObjectMap_fromEntries from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromEntries.js";
import { compose } from "../../functions.js";
import ReadonlyMap_entries from "./ReadonlyMap.entries.js";

const ReadonlyMap_toReadonlyObjectMap: ReadonlyMap.Signature["toReadonlyObjectMap"] =
  (() =>
    compose(
      ReadonlyMap_entries(),
      ReadonlyObjectMap_fromEntries(),
    )) as ReadonlyMap.Signature["toReadonlyObjectMap"];

export default ReadonlyMap_toReadonlyObjectMap;
