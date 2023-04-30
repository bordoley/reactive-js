import { returns } from "../../../functions.js";
import { Empty, ReadonlyArrayContainer } from "../../../keyed-containers.js";

const ReadonlyArray_empty: Empty<ReadonlyArrayContainer>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
