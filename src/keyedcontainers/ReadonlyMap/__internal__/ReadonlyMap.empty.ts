import { returns } from "../../../functions.js";
import { Empty, ReadonlyMapLike } from "../../../keyedcontainers.js";

const ReadonlyMap_empty: Empty<ReadonlyMapLike>["empty"] = /*@__PURE__*/ (() =>
  returns(new Map()))();

export default ReadonlyMap_empty;
