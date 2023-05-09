import { ObservableContainer, ObservableContainers } from "../../../core.js";
import Container_concatMap from "../../../core/Container/__internal__/Container.concatMap.js";
import Observable_exhaust from "./Observable.exhaust.js";
import Observable_map from "./Observable.map.js";

const Observable_exhaustMap: ObservableContainers.TypeClass<ObservableContainer>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_exhaust);

export default Observable_exhaustMap;
