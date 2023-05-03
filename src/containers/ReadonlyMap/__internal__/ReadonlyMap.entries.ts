import { KeyedContainer, ReadonlyMapContainer } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";

const ReadonlyMap_entries: KeyedContainer.Entries<ReadonlyMapContainer>["entries"] =
  () => map => pipe(map.entries(), Iterator_enumerate());

export default ReadonlyMap_entries;
