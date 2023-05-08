import { KeyedContainer, ReadonlyObjectMapLike } from "../../../core.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap.reduceWithKey.js";

const ReadonlyObjectMap_reduce: KeyedContainer.Reduce<ReadonlyObjectMapLike>["reduce"] =
  ReadonlyObjectMap_reduceWithKey;

export default ReadonlyObjectMap_reduce;
