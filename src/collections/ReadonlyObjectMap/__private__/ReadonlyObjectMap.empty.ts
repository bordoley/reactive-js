import * as Obj from "../../../__internal__/Object.js";
import { returns } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_empty: ReadonlyObjectMap.Signature["empty"] =
  /*@__PURE__*/ (() =>
    returns(Obj.createObjectMap()))() as ReadonlyObjectMap.Signature["empty"];

export default ReadonlyObjectMap_empty;
