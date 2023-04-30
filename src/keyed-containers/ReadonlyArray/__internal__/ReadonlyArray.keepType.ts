import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import {
  KeepType,
  ReadonlyArrayContainerLike,
} from "../../../keyed-containers.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: KeepType<ReadonlyArrayContainerLike>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArrayContainerLike>(
    ReadonlyArray_keep,
  ) as KeepType<ReadonlyArrayContainerLike>["keepType"];

export default ReadonlyArray_keepType;
