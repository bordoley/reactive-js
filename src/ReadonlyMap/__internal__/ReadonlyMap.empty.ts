import { ReadonlyMapContainer } from "../../containers.js";
import { returns } from "../../functions.js";

const ReadonlyMap_empty: ReadonlyMapContainer.TypeClass["empty"] =
  /*@__PURE__*/ (() => returns(new Map()))();

export default ReadonlyMap_empty;
