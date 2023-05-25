import type * as ReadonlyArray from "../../ReadonlyArray.js";
import { pickUnsafe } from "../../functions.js";
import ReadonlyArray_map from "./ReadonlyArray.map.js";

const ReadonlyArray_pick: ReadonlyArray.Signature["pick"] = (
  ...keys: (string | number | symbol)[]
) => ReadonlyArray_map(pickUnsafe(...keys));

export default ReadonlyArray_pick;
