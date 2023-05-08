import { KeyedContainers, ReadonlyArrayContainer } from "../../../core.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray.keepWithKey.js";

const ReadonlyArray_keep: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keep"] =
  ReadonlyArray_keepWithKey;

export default ReadonlyArray_keep;
