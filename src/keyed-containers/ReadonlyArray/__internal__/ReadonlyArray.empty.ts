import { returns } from "../../../functions.js";
import {
  Empty,
  ReadonlyArrayContainerLike,
} from "../../../keyed-containers.js";

const ReadonlyArray_empty: Empty<ReadonlyArrayContainerLike>["empty"] =
  /*@__PURE__*/ returns([]);

export default ReadonlyArray_empty;
