import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import { Entries, ReadonlyMapLike } from "../../../keyed-containers.js";

const ReadonlyMap_entries: Entries<ReadonlyMapLike>["entries"] = () => map =>
  pipe(map.entries(), Iterator_enumerate());

export default ReadonlyMap_entries;
