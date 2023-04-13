import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { KeepType, ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: KeepType<ReadonlyObjectMapLike>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMapLike>(
    ReadonlyObjectMap_keep,
  ) as KeepType<ReadonlyObjectMapLike>["keepType"];

export default ReadonlyObjectMap_keepType;
