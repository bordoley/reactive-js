import { returns } from "../../../functions.js";
import { Empty, ReadonlyMapContainerLike } from "../../../keyed-containers.js";

const ReadonlyMap_empty: Empty<ReadonlyMapContainerLike>["empty"] =
  /*@__PURE__*/ (() => returns(new Map()))();

export default ReadonlyMap_empty;
