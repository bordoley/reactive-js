import Iterable_createPure from "../../../computations/Iterable/__private__/Itrerable.createPure.js";
import { bind, returns } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_keys: ReadonlyMap.Signature["keys"] = /*@__PURE__*/ returns(
  map => Iterable_createPure(bind(map.keys, map)),
);

export default ReadonlyMap_keys;
