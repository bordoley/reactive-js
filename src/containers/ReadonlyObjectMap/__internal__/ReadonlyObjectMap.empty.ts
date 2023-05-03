import { create } from "../../../__internal__/Object.js";
import { KeyedContainer, ReadonlyObjectMapLike } from "../../../containers.js";
import { returns } from "../../../functions.js";

const ReadonlyObjectMap_empty: KeyedContainer.Empty<ReadonlyObjectMapLike>["empty"] =
  /*@__PURE__*/ (() =>
    returns(
      create(null),
    ))() as KeyedContainer.Empty<ReadonlyObjectMapLike>["empty"];

export default ReadonlyObjectMap_empty;
