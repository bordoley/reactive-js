import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";
import {
  Entries,
  ReadonlyMapContainerLike,
} from "../../../keyed-containers.js";

const ReadonlyMap_entries: Entries<ReadonlyMapContainerLike>["entries"] =
  () => map =>
    pipe(map.entries(), Iterator_enumerate());

export default ReadonlyMap_entries;
