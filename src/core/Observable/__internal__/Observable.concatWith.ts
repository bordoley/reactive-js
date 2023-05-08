import { Container, ObservableContainer } from "../../../core.js";
import Container_concatWith from "../../../core/Container/__internal__/Container.concatWith.js";
import Observable_concat from "./Observable.concat.js";

const Observable_concatWith: Container.TypeClass<ObservableContainer>["concatWith"] =
  /*@__PURE__*/ Container_concatWith(Observable_concat);

export default Observable_concatWith;
