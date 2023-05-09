import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import { ReadonlyObjectMapContainer } from "../../containers.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: ReadonlyObjectMapContainer.TypeClass["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMapContainer.Type>(
    ReadonlyObjectMap_keep,
  ) as ReadonlyObjectMapContainer.TypeClass["keepType"];

export default ReadonlyObjectMap_keepType;
