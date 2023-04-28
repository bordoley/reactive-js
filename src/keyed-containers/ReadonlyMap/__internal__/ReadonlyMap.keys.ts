import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import { Keys, ReadonlyMapLike } from "../../../keyed-containers.js";

const ReadonlyMap_keys: Keys<ReadonlyMapLike>["keys"] = () => map =>
  pipe(map.keys(), Iterator_enumerate());

export default ReadonlyMap_keys;
