import type * as ReadonlyArray from "./../../ReadonlyArray.js";

import ReadonlyArray_forEachWithKey from "./ReadonlyArray.forEachWithKey.js";

const ReadonlyArray_forEach: ReadonlyArray.Signature["forEach"] =
  ReadonlyArray_forEachWithKey;

export default ReadonlyArray_forEach;
