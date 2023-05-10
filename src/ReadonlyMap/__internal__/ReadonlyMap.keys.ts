import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { pipe } from "../../functions.js";

const ReadonlyMap_keys: ReadonlyMap.Signature["keys"] = () => map =>
  pipe(map.keys(), Iterator_enumerate());

export default ReadonlyMap_keys;
