import { KeyedContainer, ReadonlyMapContainer } from "../../../core.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap.mapWithKey.js";

const ReadonlyMap_map: KeyedContainer.TypeClass<ReadonlyMapContainer>["map"] =
  ReadonlyMap_mapWithKey;

export default ReadonlyMap_map;
