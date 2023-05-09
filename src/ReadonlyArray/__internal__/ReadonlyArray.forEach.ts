import { ReadonlyArrayContainer } from "../../containers.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray.forEachWithKey.js";

const ReadonlyArray_forEach: ReadonlyArrayContainer.TypeClass["forEach"] =
  ReadonlyArray_forEachWithKey;

export default ReadonlyArray_forEach;
