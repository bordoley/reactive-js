import { Map, ReadonlyMapContainer } from "../../../keyed-containers.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap.mapWithKey.js";

const ReadonlyMap_map: Map<ReadonlyMapContainer>["map"] =
  ReadonlyMap_mapWithKey;

export default ReadonlyMap_map;
