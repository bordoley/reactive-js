import { Empty, ReadonlyArrayLike } from "../../../containers";
import { returns } from "../../../functions";

const ReadonlyArray_empty: Empty<ReadonlyArrayLike>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
