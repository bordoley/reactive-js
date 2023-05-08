import { KeyedContainer, ReadonlyArrayContainer } from "../../../core.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray.keepWithKey.js";

const ReadonlyArray_keep: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keep"] =
  ReadonlyArray_keepWithKey;

export default ReadonlyArray_keep;
