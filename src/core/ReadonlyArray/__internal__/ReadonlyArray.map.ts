import { KeyedContainer, ReadonlyArrayContainer } from "../../../core.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray.mapWithKey.js";

const ReadonlyArray_map: KeyedContainer.TypeClass<ReadonlyArrayContainer>["map"] =
  ReadonlyArray_mapWithKey;

export default ReadonlyArray_map;
