import Container_ignoreElements from "../../Container/__internal__/Container.ignoreElements.js";
import { Container, ObservableContainer } from "../../containers.js";
import Observable_keep from "./Observable.keep.js";

type ObservableIgnoreElements = <
  C extends ObservableContainer.Type,
  T,
>() => Container.Operator<C, unknown, T>;
const Observable_ignoreElements: ObservableIgnoreElements =
  /*@__PURE__*/ Container_ignoreElements(
    Observable_keep,
  ) as ObservableIgnoreElements;

export default Observable_ignoreElements;
