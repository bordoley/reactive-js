import { MapTo } from "../../../containers.js";
import Container_mapTo from "../../../containers/Container/__internal__/Container.mapTo.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_map from "./Runnable.map.js";

const Runnable_mapTo: MapTo<RunnableLike>["mapTo"] =
  /*@__PURE__*/ Container_mapTo(Runnable_map);

export default Runnable_mapTo;
