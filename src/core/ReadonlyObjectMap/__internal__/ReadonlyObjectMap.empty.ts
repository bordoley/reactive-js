import { create } from "../../../__internal__/Object.js";
import { KeyedContainers, ReadonlyObjectMapLike } from "../../../core.js";
import { returns } from "../../../functions.js";

const ReadonlyObjectMap_empty: KeyedContainers.TypeClass<ReadonlyObjectMapLike>["empty"] =
  /*@__PURE__*/ (() =>
    returns(
      create(null),
    ))() as KeyedContainers.TypeClass<ReadonlyObjectMapLike>["empty"];

export default ReadonlyObjectMap_empty;
