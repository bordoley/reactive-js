import { returns } from "../../../functions.js";
import { Empty, ReadonlyArrayLike } from "../../../keyed-containers.js";

const ReadonlyArray_empty: Empty<ReadonlyArrayLike>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
