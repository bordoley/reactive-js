import { DeferredContainers, ObservableContainer } from "../../../core.js";

import Container_concatMap from "../../../core/Container/__internal__/Container.concatMap.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";

const Observable_concatMap: DeferredContainers.TypeClass<ObservableContainer>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_concatAll);

export default Observable_concatMap;
