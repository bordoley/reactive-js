import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import {
  KeepType,
  ReadonlyObjectMapContainerLike,
} from "../../../keyed-containers.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: KeepType<ReadonlyObjectMapContainerLike>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMapContainerLike>(
    ReadonlyObjectMap_keep,
  ) as KeepType<ReadonlyObjectMapContainerLike>["keepType"];

export default ReadonlyObjectMap_keepType;
