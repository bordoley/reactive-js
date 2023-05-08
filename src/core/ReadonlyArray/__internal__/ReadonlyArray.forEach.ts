import { KeyedContainer, ReadonlyArrayContainer } from "../../../core.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray.forEachWithKey.js";

const ReadonlyArray_forEach: KeyedContainer.ForEach<ReadonlyArrayContainer>["forEach"] =
  ReadonlyArray_forEachWithKey;

export default ReadonlyArray_forEach;
