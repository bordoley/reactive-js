import { KeyedContainer, ReadonlyMapContainer } from "../../../core.js";
import Iterator_enumerate from "../../../core/Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../../functions.js";

const ReadonlyMap_keys: KeyedContainer.TypeClass<ReadonlyMapContainer>["keys"] =
  () => map => pipe(map.keys(), Iterator_enumerate());

export default ReadonlyMap_keys;
