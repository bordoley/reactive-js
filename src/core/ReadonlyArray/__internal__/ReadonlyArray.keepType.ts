import { KeyedContainer, ReadonlyArrayContainer } from "../../../core.js";
import Container_keepType from "../../../core/Container/__internal__/Container.keepType.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: KeyedContainer.KeepType<ReadonlyArrayContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArrayContainer>(
    ReadonlyArray_keep,
  ) as KeyedContainer.KeepType<ReadonlyArrayContainer>["keepType"];

export default ReadonlyArray_keepType;
