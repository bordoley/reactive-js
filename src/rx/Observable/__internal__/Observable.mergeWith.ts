import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import { MergeWith, ObservableLike } from "../../../rx.js";
import Observable_merge from "./Observable.merge.js";

const Observable_mergeWith: MergeWith<ObservableLike>["mergeWith"] =
  /*@__PURE__*/ Container_concatWith(Observable_merge);

export default Observable_mergeWith;
