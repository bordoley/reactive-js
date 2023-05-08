import { KeyedContainer, ReadonlyObjectMapContainer } from "../../../core.js";
import Container_keepType from "../../../core/Container/__internal__/Container.keepType.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap.keep.js";

const ReadonlyObjectMap_keepType: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["keepType"] =
  /*@__PURE__*/ Container_keepType<ReadonlyObjectMapContainer>(
    ReadonlyObjectMap_keep,
  ) as KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["keepType"];

export default ReadonlyObjectMap_keepType;
