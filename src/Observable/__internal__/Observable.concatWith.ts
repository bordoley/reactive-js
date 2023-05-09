import Container_concatWith from "../../Container/__internal__/Container.concatWith.js";
import { DeferredContainers, ObservableContainer } from "../../containers.js";
import Observable_concat from "./Observable.concat.js";

const Observable_concatWith: DeferredContainers.TypeClass<ObservableContainer.Type>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Observable_concat);

export default Observable_concatWith;
