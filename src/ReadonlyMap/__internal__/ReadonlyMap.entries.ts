import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
import { KeyedContainers, ReadonlyMapContainer } from "../../types.js";

const ReadonlyMap_entries: KeyedContainers.TypeClass<ReadonlyMapContainer>["entries"] =
  () => map => pipe(map.entries(), Iterator_enumerate());

export default ReadonlyMap_entries;
