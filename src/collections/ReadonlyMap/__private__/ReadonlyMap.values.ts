import { bind, pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_values: ReadonlyMap.Signature["values"] = () => map =>
  pipe(bind(map.values, map), Enumerable_fromIteratorFactory());

export default ReadonlyMap_values;
