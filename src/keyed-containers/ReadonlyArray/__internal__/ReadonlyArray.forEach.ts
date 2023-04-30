import {
  ForEach,
  ReadonlyArrayContainerLike,
} from "../../../keyed-containers.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray.forEachWithKey.js";

const ReadonlyArray_forEach: ForEach<ReadonlyArrayContainerLike>["forEach"] =
  ReadonlyArray_forEachWithKey;

export default ReadonlyArray_forEach;
