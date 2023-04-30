import { ContainerOperator } from "../../../containers.js";
import Container_mapTo from "../../../containers/Container/__internal__/Container.mapTo.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

type ObservableMap = <C extends ObservableContainerLike, TA, TB>(
  value: TB,
) => ContainerOperator<C, TA, TB>;
const Observable_mapTo: ObservableMap = /*@__PURE__*/ Container_mapTo(
  Observable_map,
) as ObservableMap;

export default Observable_mapTo;
