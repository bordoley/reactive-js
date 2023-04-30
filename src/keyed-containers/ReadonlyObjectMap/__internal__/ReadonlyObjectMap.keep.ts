import { Keep, ReadonlyObjectMapContainer } from "../../../keyed-containers.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap.keepWithKey.js";

const ReadonlyObjectMap_keep: Keep<ReadonlyObjectMapContainer>["keep"] =
  ReadonlyObjectMap_keepWithKey;

export default ReadonlyObjectMap_keep;
