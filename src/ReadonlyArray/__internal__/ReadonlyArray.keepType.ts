import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: ReadonlyArray.Signature["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyArray.Type>(
    ReadonlyArray_keep,
  ) as ReadonlyArray.Signature["keepType"];

export default ReadonlyArray_keepType;
