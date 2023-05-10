import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: ReadonlyObjectMap.Signature["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMap.Type>(
    ReadonlyObjectMap_keep,
  ) as ReadonlyObjectMap.Signature["keepType"];

export default ReadonlyObjectMap_keepType;
