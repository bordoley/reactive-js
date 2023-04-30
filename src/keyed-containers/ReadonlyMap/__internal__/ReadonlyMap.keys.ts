import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import { Keys, ReadonlyMapContainer } from "../../../keyed-containers.js";

const ReadonlyMap_keys: Keys<ReadonlyMapContainer>["keys"] = () => map =>
  pipe(map.keys(), Iterator_enumerate());

export default ReadonlyMap_keys;
