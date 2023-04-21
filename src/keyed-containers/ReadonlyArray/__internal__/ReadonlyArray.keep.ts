import { Keep, ReadonlyArrayLike } from "../../../keyed-containers.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray.keepWithKey.js";

const ReadonlyArray_keep: Keep<ReadonlyArrayLike>["keep"] =
  ReadonlyArray_keepWithKey;

export default ReadonlyArray_keep;
