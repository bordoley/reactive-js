import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { KeepType, ReadonlyArrayContainer } from "../../../keyed-containers.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: KeepType<ReadonlyArrayContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArrayContainer>(
    ReadonlyArray_keep,
  ) as KeepType<ReadonlyArrayContainer>["keepType"];

export default ReadonlyArray_keepType;
