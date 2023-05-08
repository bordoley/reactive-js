import { create } from "../../../__internal__/Object.js";
import { KeyedContainer, ReadonlyObjectMapLike } from "../../../core.js";
import { returns } from "../../../functions.js";

const ReadonlyObjectMap_empty: KeyedContainer.TypeClass<ReadonlyObjectMapLike>["empty"] =
  /*@__PURE__*/ (() =>
    returns(
      create(null),
    ))() as KeyedContainer.TypeClass<ReadonlyObjectMapLike>["empty"];

export default ReadonlyObjectMap_empty;
