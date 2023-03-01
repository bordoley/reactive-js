import { Compute } from "../../../containers.js";

import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

const Observable_compute: Compute<ObservableLike>["compute"] =
  /*@__PURE__*/ Container_compute(ReadonlyArray_toObservable, Observable_map);

export default Observable_compute;
