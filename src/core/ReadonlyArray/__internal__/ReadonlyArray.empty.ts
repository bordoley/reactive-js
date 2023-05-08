import { KeyedContainers, ReadonlyArrayContainer } from "../../../core.js";
import { returns } from "../../../functions.js";

const ReadonlyArray_empty: KeyedContainers.TypeClass<ReadonlyArrayContainer>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
