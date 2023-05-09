import { KeyedContainers, ReadonlyArrayContainer } from "../../containers.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray.mapWithKey.js";

const ReadonlyArray_map: KeyedContainers.TypeClass<ReadonlyArrayContainer>["map"] =
  ReadonlyArray_mapWithKey;

export default ReadonlyArray_map;
