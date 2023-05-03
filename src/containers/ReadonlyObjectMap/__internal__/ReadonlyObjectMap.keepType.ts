import {
  KeyedContainer,
  ReadonlyObjectMapContainer,
} from "../../../containers.js";
import Container_keepType from "../../../containers/Container/__internal__/Container.keepType.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: KeyedContainer.KeepType<ReadonlyObjectMapContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMapContainer>(
    ReadonlyObjectMap_keep,
  ) as KeyedContainer.KeepType<ReadonlyObjectMapContainer>["keepType"];

export default ReadonlyObjectMap_keepType;
