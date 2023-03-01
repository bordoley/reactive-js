import { StartWith } from "../../../containers.js";
import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatWith from "./Observable.concatWith.js";

const Observable_startWith: StartWith<ObservableLike>["startWith"] =
  /*@__PURE__*/ Container_startWith(
    Observable_concatWith,
    ReadonlyArray_toRunnable,
  );

export default Observable_startWith;
