import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import { KeepType, ReadonlyRecordLike } from "../../../keyedcontainers.js";
import ReadonlyRecord_keep from "./ReadonlyRecord.keep.js";

const ReadonlyRecord_keepType: KeepType<ReadonlyRecordLike>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyRecordLike>(
    ReadonlyRecord_keep,
  ) as KeepType<ReadonlyRecordLike>["keepType"];

export default ReadonlyRecord_keepType;
