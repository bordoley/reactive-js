import { KeyedContainers, ReadonlyObjectMapContainer } from "../../../core.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap.mapWithKey.js";

const ReadonlyObjectMap_map: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["map"] =
  ReadonlyObjectMap_mapWithKey;

export default ReadonlyObjectMap_map;
