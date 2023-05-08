import { Containers, ObservableContainer } from "../../../core.js";
import Container_flatMapIterable from "../../../core/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../../core/Iterable/__internal__/Iterable.toObservable.js";
import Observable_concatMap from "./Observable.concatMap.js";

const Observable_flatMapIterable: Containers.TypeClass<ObservableContainer>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Observable_concatMap,
    Iterable_toObservable,
  );

export default Observable_flatMapIterable;
