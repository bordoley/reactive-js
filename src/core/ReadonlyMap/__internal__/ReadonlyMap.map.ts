import { KeyedContainers, ReadonlyMapContainer } from "../../../core.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap.mapWithKey.js";

const ReadonlyMap_map: KeyedContainers.TypeClass<ReadonlyMapContainer>["map"] =
  ReadonlyMap_mapWithKey;

export default ReadonlyMap_map;
