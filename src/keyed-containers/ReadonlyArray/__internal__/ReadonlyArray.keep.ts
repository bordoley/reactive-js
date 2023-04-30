import { Keep, ReadonlyArrayContainer } from "../../../keyed-containers.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray.keepWithKey.js";

const ReadonlyArray_keep: Keep<ReadonlyArrayContainer>["keep"] =
  ReadonlyArray_keepWithKey;

export default ReadonlyArray_keep;
