import { KeyedContainer, ReadonlyObjectMapContainer } from "../../../core.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap.mapWithKey.js";

const ReadonlyObjectMap_map: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["map"] =
  ReadonlyObjectMap_mapWithKey;

export default ReadonlyObjectMap_map;
