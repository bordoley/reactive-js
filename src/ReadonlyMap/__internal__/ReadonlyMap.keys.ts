import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { KeyedContainers, ReadonlyMapContainer } from "../../containers.js";
import { pipe } from "../../functions.js";

const ReadonlyMap_keys: KeyedContainers.TypeClass<ReadonlyMapContainer>["keys"] =
  () => map => pipe(map.keys(), Iterator_enumerate());

export default ReadonlyMap_keys;
