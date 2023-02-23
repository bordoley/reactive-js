import { ConcatMap, Map } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { EnumerableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import EnumerableObservable_concatAll from "./EnumerableObservable.concatAll.js";

const EnumerableObservable_concatMap: ConcatMap<EnumerableObservableLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Map<EnumerableObservableLike>["map"],
    EnumerableObservable_concatAll,
  );

export default EnumerableObservable_concatMap;
