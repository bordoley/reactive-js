import { ContainerOperator } from "../../../containers.js";
import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_keep from "./Observable.keep.js";

type ObservableIgnoreElements = <
  C extends ObservableContainerLike,
  T,
>() => ContainerOperator<C, unknown, T>;
const Observable_ignoreElements: ObservableIgnoreElements =
  /*@__PURE__*/ Container_ignoreElements(
    Observable_keep,
  ) as ObservableIgnoreElements;

export default Observable_ignoreElements;
