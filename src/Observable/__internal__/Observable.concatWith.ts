import Container_concatWith from "../../Container/__internal__/Container.concatWith.js";
import { DeferredTypeClass, ObservableContainer } from "../../containers.js";
import Observable_concat from "./Observable.concat.js";

const Observable_concatWith: DeferredTypeClass<ObservableContainer.Type>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Observable_concat);

export default Observable_concatWith;
