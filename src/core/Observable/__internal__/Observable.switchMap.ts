import { ObservableContainer, ObservableContainers } from "../../../core.js";
import Container_concatMap from "../../../core/Container/__internal__/Container.concatMap.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";

const Observable_switchMap: ObservableContainers.TypeClass<ObservableContainer>["switchMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_switchAll);

export default Observable_switchMap;
