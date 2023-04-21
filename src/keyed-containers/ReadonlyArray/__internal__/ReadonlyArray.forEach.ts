import { ForEach, ReadonlyArrayLike } from "../../../keyed-containers.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray.forEachWithKey.js";

const ReadonlyArray_forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArray_forEachWithKey;

export default ReadonlyArray_forEach;
