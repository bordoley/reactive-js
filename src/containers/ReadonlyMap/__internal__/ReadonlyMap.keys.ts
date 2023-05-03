import { KeyedContainer, ReadonlyMapContainer } from "../../../containers.js";
import Iterator_enumerate from "../../../containers/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";

const ReadonlyMap_keys: KeyedContainer.Keys<ReadonlyMapContainer>["keys"] =
  () => map =>
    pipe(map.keys(), Iterator_enumerate());

export default ReadonlyMap_keys;
