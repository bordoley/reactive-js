import Container_mapTo from "../../Container/__internal__/Container.mapTo.js";
import { Container, ObservableContainer } from "../../containers.js";
import Observable_map from "./Observable.map.js";

type ObservableMap = <C extends ObservableContainer.Type, TA, TB>(
  value: TB,
) => Container.Operator<C, TA, TB>;
const Observable_mapTo: ObservableMap = /*@__PURE__*/ Container_mapTo(
  Observable_map,
) as ObservableMap;

export default Observable_mapTo;
