import { KeyedContainer, ReadonlyObjectMapContainer } from "../../../core.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap.keepWithKey.js";

const ReadonlyObjectMap_keep: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["keep"] =
  ReadonlyObjectMap_keepWithKey;

export default ReadonlyObjectMap_keep;
