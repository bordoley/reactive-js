import {
  KeyedContainer,
  ReadonlyObjectMapContainer,
} from "../../../containers.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap.mapWithKey.js";

const ReadonlyObjectMap_map: KeyedContainer.Map<ReadonlyObjectMapContainer>["map"] =
  ReadonlyObjectMap_mapWithKey;

export default ReadonlyObjectMap_map;
