import {
  KeyedContainer,
  ReadonlyObjectMapContainer,
} from "../../../containers.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap.keepWithKey.js";

const ReadonlyObjectMap_keep: KeyedContainer.Keep<ReadonlyObjectMapContainer>["keep"] =
  ReadonlyObjectMap_keepWithKey;

export default ReadonlyObjectMap_keep;
