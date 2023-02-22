import { Compute } from "../../../containers.js";

import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_map from "./Runnable.map.js";

const Runnable_compute: Compute<RunnableLike>["compute"] =
  /*@__PURE__*/ Container_compute(ReadonlyArray_toRunnable, Runnable_map);

export default Runnable_compute;
