import { KeyedContainers } from "../../containers.js";
import { ReadonlyObjectMapLike } from "../../types.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap.reduceWithKey.js";

const ReadonlyObjectMap_reduce: KeyedContainers.TypeClass<ReadonlyObjectMapLike>["reduce"] =
  ReadonlyObjectMap_reduceWithKey;

export default ReadonlyObjectMap_reduce;
