import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { bind, returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_values: ReadonlyMap.Signature["values"] =
  /*@__PURE__*/ returns(map => Iterable_createPure(bind(map.values, map)));

export default ReadonlyMap_values;
