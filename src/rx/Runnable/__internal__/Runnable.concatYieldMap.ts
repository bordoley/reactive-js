import { ConcatYieldMap } from "../../../containers.js";

import Container_concatYieldMap from "../../../containers/Container/__internal__/Container.concatYieldMap.js";
import Iterable_toRunnable from "../../../containers/Iterable/__internal__/Iterable.toRunnable.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
import Runnable_map from "./Runnable.map.js";

const Runnable_concatYieldMap: ConcatYieldMap<RunnableLike>["concatYieldMap"] =
  /*@__PURE__*/ Container_concatYieldMap(
    Runnable_concatAll,
    Iterable_toRunnable,
    Runnable_map,
  );

export default Runnable_concatYieldMap;
