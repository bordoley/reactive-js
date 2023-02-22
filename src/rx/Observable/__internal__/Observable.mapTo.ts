import { MapTo } from "../../../containers.js";
import Container_mapTo from "../../../containers/Container/__internal__/Container.mapTo.js";
import { ObservableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

const Observable_mapTo: MapTo<ObservableLike>["mapTo"] =
  /*@__PURE__*/ Container_mapTo(Observable_map);

export default Observable_mapTo;
