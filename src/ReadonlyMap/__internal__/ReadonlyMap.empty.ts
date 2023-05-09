import { returns } from "../../functions.js";
import { KeyedContainers, ReadonlyMapContainer } from "../../types.js";

const ReadonlyMap_empty: KeyedContainers.TypeClass<ReadonlyMapContainer>["empty"] =
  /*@__PURE__*/ (() => returns(new Map()))();

export default ReadonlyMap_empty;
