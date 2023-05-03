import { KeyedContainer, ReadonlyArrayContainer } from "../../../containers.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray.keepWithKey.js";

const ReadonlyArray_keep: KeyedContainer.Keep<ReadonlyArrayContainer>["keep"] =
  ReadonlyArray_keepWithKey;

export default ReadonlyArray_keep;
