import { returns } from "../../../functions.js";
import { Empty, ReadonlyArrayLike } from "../../../keyedcontainers.js";

const ReadonlyArray_empty: Empty<ReadonlyArrayLike>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
