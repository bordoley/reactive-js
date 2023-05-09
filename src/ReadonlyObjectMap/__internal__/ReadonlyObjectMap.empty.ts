import { create } from "../../__internal__/Object.js";
import { ReadonlyObjectMapContainer } from "../../containers.js";
import { returns } from "../../functions.js";

const ReadonlyObjectMap_empty: ReadonlyObjectMapContainer.TypeClass["empty"] =
  /*@__PURE__*/ (() =>
    returns(create(null)))() as ReadonlyObjectMapContainer.TypeClass["empty"];

export default ReadonlyObjectMap_empty;
