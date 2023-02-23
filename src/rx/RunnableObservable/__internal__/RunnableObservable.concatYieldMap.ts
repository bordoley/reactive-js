import { ConcatYieldMap, Map } from "../../../containers.js";

import Container_concatYieldMap from "../../../containers/Container/__internal__/Container.concatYieldMap.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import { RunnableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import RunnableObservable_concatAll from "./RunnableObservable.concatAll.js";

const RunnableObservable_concatYieldMap: ConcatYieldMap<RunnableObservableLike>["concatYieldMap"] =
  /*@__PURE__*/ Container_concatYieldMap(
    RunnableObservable_concatAll,
    Iterable_toRunnableObservable,
    Observable_map as Map<RunnableObservableLike>["map"],
  );

export default RunnableObservable_concatYieldMap;
