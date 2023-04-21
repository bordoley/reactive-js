import { Map, ReadonlyArrayLike } from "../../../keyed-containers.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray.mapWithKey.js";

const ReadonlyArray_map: Map<ReadonlyArrayLike>["map"] =
  ReadonlyArray_mapWithKey;

export default ReadonlyArray_map;
