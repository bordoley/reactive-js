import { KeyedContainer, ReadonlyMapContainer } from "../../../core.js";
import { returns } from "../../../functions.js";

const ReadonlyMap_empty: KeyedContainer.TypeClass<ReadonlyMapContainer>["empty"] =
  /*@__PURE__*/ (() => returns(new Map()))();

export default ReadonlyMap_empty;
