import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { pipe } from "../../functions.js";

const ReadonlyMap_entries: ReadonlyMap.Signature["entries"] = () => map =>
  pipe(map.entries(), Iterator_enumerate());

export default ReadonlyMap_entries;
