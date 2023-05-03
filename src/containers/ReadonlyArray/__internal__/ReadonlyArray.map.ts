import { KeyedContainer, ReadonlyArrayContainer } from "../../../containers.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray.mapWithKey.js";

const ReadonlyArray_map: KeyedContainer.Map<ReadonlyArrayContainer>["map"] =
  ReadonlyArray_mapWithKey;

export default ReadonlyArray_map;
