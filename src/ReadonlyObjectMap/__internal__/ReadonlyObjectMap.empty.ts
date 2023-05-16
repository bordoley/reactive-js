import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import * as Obj from "../../__internal__/Object.js";
import { returns } from "../../functions.js";

const ReadonlyObjectMap_empty: ReadonlyObjectMap.Signature["empty"] =
  /*@__PURE__*/ (() =>
    returns(Obj.create(null)))() as ReadonlyObjectMap.Signature["empty"];

export default ReadonlyObjectMap_empty;
