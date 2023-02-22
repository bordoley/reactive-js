import { Compute } from "../../../containers.js";

import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

const Observable_compute: Compute<ObservableLike>["compute"] =
  /*@__PURE__*/ Container_compute(
    ReadonlyArray_toRunnableObservable,
    Observable_map,
  );

export default Observable_compute;
