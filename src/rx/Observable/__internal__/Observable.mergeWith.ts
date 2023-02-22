import { ConcatWith } from "../../../containers.js";
import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import { ObservableLike } from "../../../rx.js";
import Observable_merge from "./Observable.merge.js";

// FIXME: Add MergeWith type
const Observable_mergeWith: ConcatWith<ObservableLike>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Observable_merge);

export default Observable_mergeWith;
