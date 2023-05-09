import { ReadonlyArrayContainer } from "../../containers.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray.mapWithKey.js";

const ReadonlyArray_map: ReadonlyArrayContainer.TypeClass["map"] =
  ReadonlyArray_mapWithKey;

export default ReadonlyArray_map;
