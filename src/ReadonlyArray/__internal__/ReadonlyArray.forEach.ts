import { KeyedContainers, ReadonlyArrayContainer } from "../../containers.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray.forEachWithKey.js";

const ReadonlyArray_forEach: KeyedContainers.TypeClass<ReadonlyArrayContainer>["forEach"] =
  ReadonlyArray_forEachWithKey;

export default ReadonlyArray_forEach;
