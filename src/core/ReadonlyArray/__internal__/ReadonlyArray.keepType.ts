import { KeyedContainer, ReadonlyArrayContainer } from "../../../core.js";
import Container_keepType from "../../../core/Container/__internal__/Container.keepType.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArrayContainer>(
    ReadonlyArray_keep,
  ) as KeyedContainer.TypeClass<ReadonlyArrayContainer>["keepType"];

export default ReadonlyArray_keepType;
