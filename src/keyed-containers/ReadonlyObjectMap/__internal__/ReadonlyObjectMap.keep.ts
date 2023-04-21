import { Keep, ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap.keepWithKey.js";

const ReadonlyObjectMap_keep: Keep<ReadonlyObjectMapLike>["keep"] =
  ReadonlyObjectMap_keepWithKey;

export default ReadonlyObjectMap_keep;
