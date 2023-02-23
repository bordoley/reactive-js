import { ConcatMap, Map } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { RunnableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import RunnableObservable_concatAll from "./RunnableObservable.concatAll.js";

const RunnableObservable_concatMap: ConcatMap<RunnableObservableLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Map<RunnableObservableLike>["map"],
    RunnableObservable_concatAll,
  );

export default RunnableObservable_concatMap;
