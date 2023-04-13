import { create } from "../../../__internal__/Object.js";
import { returns } from "../../../functions.js";
import { Empty, ReadonlyObjectMapLike } from "../../../keyed-containers.js";

const ReadonlyObjectMap_empty: Empty<ReadonlyObjectMapLike>["empty"] =
  /*@__PURE__*/ (() =>
    returns(create(null)))() as Empty<ReadonlyObjectMapLike>["empty"];

export default ReadonlyObjectMap_empty;
