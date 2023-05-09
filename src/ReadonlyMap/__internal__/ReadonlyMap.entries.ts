import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { ReadonlyMapContainer } from "../../containers.js";
import { pipe } from "../../functions.js";

const ReadonlyMap_entries: ReadonlyMapContainer.TypeClass["entries"] =
  () => map =>
    pipe(map.entries(), Iterator_enumerate());

export default ReadonlyMap_entries;
