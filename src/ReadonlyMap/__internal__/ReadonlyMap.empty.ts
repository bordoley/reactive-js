import { KeyedContainers, ReadonlyMapContainer } from "../../containers.js";
import { returns } from "../../functions.js";

const ReadonlyMap_empty: KeyedContainers.TypeClass<ReadonlyMapContainer>["empty"] =
  /*@__PURE__*/ (() => returns(new Map()))();

export default ReadonlyMap_empty;
