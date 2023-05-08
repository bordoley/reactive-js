import { Containers, ObservableContainer } from "../../../core.js";
import Container_mapTo from "../../../core/Container/__internal__/Container.mapTo.js";
import Observable_map from "./Observable.map.js";

type ObservableMap = <C extends ObservableContainer, TA, TB>(
  value: TB,
) => Containers.Operator<C, TA, TB>;
const Observable_mapTo: ObservableMap = /*@__PURE__*/ Container_mapTo(
  Observable_map,
) as ObservableMap;

export default Observable_mapTo;
