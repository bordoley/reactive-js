import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import { DeferredTypeClass, ObservableContainer } from "../../containers.js";

import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";

// FIXME wrong typeclass
const Observable_concatMap: DeferredTypeClass<ObservableContainer.Type>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_concatAll);

export default Observable_concatMap;
