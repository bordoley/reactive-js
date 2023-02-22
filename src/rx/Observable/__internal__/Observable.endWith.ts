import { EndWith } from "../../../containers.js";
import Container_endWith from "../../../containers/Container/__internal__/Container.endWith.js";
import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatWith from "./Observable.concatWith.js";

const Observable_endWith: EndWith<ObservableLike>["endWith"] =
  /*@__PURE__*/ Container_endWith(
    Observable_concatWith,
    ReadonlyArray_toRunnableObservable,
  );

export default Observable_endWith;
