import {
  Keep,
  ReadonlyObjectMapContainerLike,
} from "../../../keyed-containers.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap.keepWithKey.js";

const ReadonlyObjectMap_keep: Keep<ReadonlyObjectMapContainerLike>["keep"] =
  ReadonlyObjectMap_keepWithKey;

export default ReadonlyObjectMap_keep;
