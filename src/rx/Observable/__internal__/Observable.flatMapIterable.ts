import { Container } from "../../../containers.js";
import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../../containers/Iterable/__internal__/Iterable.toObservable.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_concatMap from "./Observable.concatMap.js";

const Observable_flatMapIterable: Container.FlatMapIterable<ObservableContainer>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Observable_concatMap,
    Iterable_toObservable,
  );

export default Observable_flatMapIterable;
