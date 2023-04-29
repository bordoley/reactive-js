import { ReadonlyObjectMapLike, Reduce } from "../../../keyed-containers.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap.reduceWithKey.js";

const ReadonlyObjectMap_reduce: Reduce<ReadonlyObjectMapLike>["reduce"] =
  ReadonlyObjectMap_reduceWithKey;

export default ReadonlyObjectMap_reduce;
