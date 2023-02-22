import { ConcatMap } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";

const Observable_concatMap: ConcatMap<ObservableLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_concatAll);

export default Observable_concatMap;
