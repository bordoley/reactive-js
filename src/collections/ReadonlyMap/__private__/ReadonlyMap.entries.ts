import { bind, pipe } from "../../../functions.js";
import Enumerable_fromIteratorFactory from "../../Enumerable/__private__/Enumerable.fromIteratorFactory.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_entries: ReadonlyMap.Signature["entries"] = () => map =>
  pipe(bind(map.entries, map), Enumerable_fromIteratorFactory());

export default ReadonlyMap_entries;
