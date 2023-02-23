import { FlatMapIterable } from "../../../containers.js";
import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatMap from "./Observable.concatMap.js";

const Observable_flatMapIterable: FlatMapIterable<ObservableLike>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Observable_concatMap,
    Iterable_toRunnableObservable,
  );

export default Observable_flatMapIterable;
