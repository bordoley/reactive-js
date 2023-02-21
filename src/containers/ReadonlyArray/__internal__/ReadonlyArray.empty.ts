import { Empty, ReadonlyArrayLike } from "../../../containers.js";
import { returns } from "../../../functions.js";

const ReadonlyArray_empty: Empty<ReadonlyArrayLike>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
