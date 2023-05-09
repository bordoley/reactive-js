import { ReadonlyObjectMapContainer } from "../../containers.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap.reduceWithKey.js";

const ReadonlyObjectMap_reduce: ReadonlyObjectMapContainer.TypeClass["reduce"] =
  ReadonlyObjectMap_reduceWithKey;

export default ReadonlyObjectMap_reduce;
