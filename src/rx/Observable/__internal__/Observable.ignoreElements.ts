import { ContainerOperator } from "../../../containers.js";
import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_keep from "./Observable.keep.js";

type ObservableIgnoreElements = <
  C extends ObservableContainer,
  T,
>() => ContainerOperator<C, unknown, T>;
const Observable_ignoreElements: ObservableIgnoreElements =
  /*@__PURE__*/ Container_ignoreElements(
    Observable_keep,
  ) as ObservableIgnoreElements;

export default Observable_ignoreElements;
