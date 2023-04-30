import { Map, ReadonlyArrayContainer } from "../../../keyed-containers.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray.mapWithKey.js";

const ReadonlyArray_map: Map<ReadonlyArrayContainer>["map"] =
  ReadonlyArray_mapWithKey;

export default ReadonlyArray_map;
