import { FlatMapIterable } from "../../../containers.js";
import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toRunnableObservable from "../../../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import { RunnableObservableLike } from "../../../rx.js";
import RunnableObservable_concatMap from "./RunnableObservable.concatMap.js";

const RunnableObservable_flatMapIterable: FlatMapIterable<RunnableObservableLike>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    RunnableObservable_concatMap,
    Iterable_toRunnableObservable,
  );

export default RunnableObservable_flatMapIterable;
