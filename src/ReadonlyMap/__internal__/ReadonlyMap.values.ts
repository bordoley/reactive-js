import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { pipe } from "../../functions.js";

const ReadonlyMap_values: ReadonlyMap.Signature["values"] = () => map =>
  pipe(map.values(), Iterator_enumerate());

export default ReadonlyMap_values;
