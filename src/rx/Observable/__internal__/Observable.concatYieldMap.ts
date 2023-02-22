import { ConcatYieldMap } from "../../../containers.js";

import Container_concatYieldMap from "../../../containers/Container/__internal__/Container.concatYieldMap.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";

const Observable_concatYieldMap: ConcatYieldMap<ObservableLike>["concatYieldMap"] =
  /*@__PURE__*/ Container_concatYieldMap(
    Observable_concatAll,
    Iterable_toRunnableObservable,
    Observable_map,
  );

export default Observable_concatYieldMap;
