import { returns } from "../../../functions.js";
import { Empty, ReadonlyMapContainer } from "../../../keyed-containers.js";

const ReadonlyMap_empty: Empty<ReadonlyMapContainer>["empty"] =
  /*@__PURE__*/ (() => returns(new Map()))();

export default ReadonlyMap_empty;
