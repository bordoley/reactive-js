import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import {
  KeyedContainers,
  ReadonlyObjectMapContainer,
} from "../../containers.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMapContainer>(
    ReadonlyObjectMap_keep,
  ) as KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keepType"];

export default ReadonlyObjectMap_keepType;
