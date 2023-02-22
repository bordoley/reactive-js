import { KeepType, ReadonlyArrayLike } from "../../../containers.js";
import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import ReadonlyArray_keep from "./ReadonlyArray.keep.js";

const ReadonlyArray_keepType: KeepType<ReadonlyArrayLike>["keepType"] =
  /*@__PURE__*/ Container_keepType(
    ReadonlyArray_keep,
  ) as KeepType<ReadonlyArrayLike>["keepType"];

export default ReadonlyArray_keepType;
