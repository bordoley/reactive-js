import {
  Map,
  ReadonlyObjectMapContainerLike,
} from "../../../keyed-containers.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap.mapWithKey.js";

const ReadonlyObjectMap_map: Map<ReadonlyObjectMapContainerLike>["map"] =
  ReadonlyObjectMap_mapWithKey;

export default ReadonlyObjectMap_map;
