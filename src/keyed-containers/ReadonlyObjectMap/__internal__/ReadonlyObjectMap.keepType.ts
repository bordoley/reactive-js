import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import {
  KeepType,
  ReadonlyObjectMapContainer,
} from "../../../keyed-containers.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: KeepType<ReadonlyObjectMapContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMapContainer>(
    ReadonlyObjectMap_keep,
  ) as KeepType<ReadonlyObjectMapContainer>["keepType"];

export default ReadonlyObjectMap_keepType;
