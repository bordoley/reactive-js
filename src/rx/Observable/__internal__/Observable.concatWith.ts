import { ConcatWith } from "../../../containers.js";

import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concat from "./Observable.concat.js";

const Observable_concatWith: ConcatWith<ObservableLike>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Observable_concat);

export default Observable_concatWith;
