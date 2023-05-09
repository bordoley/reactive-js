import { returns } from "../../functions.js";
import { KeyedContainers, ReadonlyArrayContainer } from "../../types.js";

const ReadonlyArray_empty: KeyedContainers.TypeClass<ReadonlyArrayContainer>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
