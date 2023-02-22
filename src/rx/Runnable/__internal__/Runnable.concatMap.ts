import { ConcatMap } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
import Runnable_map from "./Runnable.map.js";

const Runnable_concatMap: ConcatMap<RunnableLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(Runnable_map, Runnable_concatAll);

export default Runnable_concatMap;
