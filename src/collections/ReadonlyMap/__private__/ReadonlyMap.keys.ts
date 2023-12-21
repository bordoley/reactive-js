import { bind, pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_keys: ReadonlyMap.Signature["keys"] = () => map =>
  pipe(bind(map.keys, map), Enumerable_fromIteratorFactory());

export default ReadonlyMap_keys;
