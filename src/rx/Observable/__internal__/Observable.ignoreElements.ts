import { IgnoreElements } from "../../../containers.js";
import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import { ObservableLike } from "../../../rx.js";
import Observable_keep from "./Observable.keep.js";

const Observable_ignoreElements: IgnoreElements<ObservableLike>["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(Observable_keep);

export default Observable_ignoreElements;
