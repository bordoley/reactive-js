import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { KeepType, ReadonlyArrayLike } from "../../../keyed-containers.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: KeepType<ReadonlyArrayLike>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArrayLike>(
    ReadonlyArray_keep,
  ) as KeepType<ReadonlyArrayLike>["keepType"];

export default ReadonlyArray_keepType;
