import { ForEach, ReadonlyArrayContainer } from "../../../keyed-containers.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray.forEachWithKey.js";

const ReadonlyArray_forEach: ForEach<ReadonlyArrayContainer>["forEach"] =
  ReadonlyArray_forEachWithKey;

export default ReadonlyArray_forEach;
