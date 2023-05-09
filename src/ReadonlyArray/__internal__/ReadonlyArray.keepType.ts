import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import { ReadonlyArrayContainer } from "../../containers.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: ReadonlyArrayContainer.TypeClass["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArrayContainer.Type>(
    ReadonlyArray_keep,
  ) as ReadonlyArrayContainer.TypeClass["keepType"];

export default ReadonlyArray_keepType;
