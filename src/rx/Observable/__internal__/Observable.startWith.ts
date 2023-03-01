import { StartWith } from "../../../containers.js";
import Container_startWith from "../../../containers/Container/__internal__/Container.startWith.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatWith from "./Observable.concatWith.js";

const Observable_startWith: StartWith<ObservableLike>["startWith"] =
  /*@__PURE__*/ Container_startWith(
    Observable_concatWith,
    ReadonlyArray_toObservable,
  );

export default Observable_startWith;
