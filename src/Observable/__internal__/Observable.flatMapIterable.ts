import Container_flatMapIterable from "../../Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import { ObservableContainer } from "../../containers.js";
import Observable_concatMap from "./Observable.concatMap.js";

const Observable_flatMapIterable: ObservableContainer.TypeClass["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Observable_concatMap,
    Iterable_toObservable,
  );

export default Observable_flatMapIterable;
