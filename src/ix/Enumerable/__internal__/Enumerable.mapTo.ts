import { MapTo } from "../../../containers.js";
import Container_mapTo from "../../../containers/Container/__internal__/Container.mapTo.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_map from "./Enumerable.map.js";

const Enumerable_mapTo: MapTo<EnumerableLike>["mapTo"] =
  /*@__PURE__*/ Container_mapTo(Enumerable_map);

export default Enumerable_mapTo;
