import { Map, ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap.mapWithKey.js";

const ReadonlyObjectMap_map: Map<ReadonlyObjectMapLike>["map"] =
  ReadonlyObjectMap_mapWithKey;

export default ReadonlyObjectMap_map;
