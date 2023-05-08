import { KeyedContainers, ReadonlyArrayContainer } from "../../../core.js";
import Container_keepType from "../../../core/Container/__internal__/Container.keepType.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArrayContainer>(
    ReadonlyArray_keep,
  ) as KeyedContainers.TypeClass<ReadonlyArrayContainer>["keepType"];

export default ReadonlyArray_keepType;
