import { FlatMapIterable } from "../../../containers.js";
import Container_flatMapIterable from "../../../containers/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../../containers/Iterable/__internal__/Iterable.toObservable.js";
import { EnumerableContainerLike } from "../../../rx.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";

const Enumerable_flatMapIterable: FlatMapIterable<EnumerableContainerLike>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Enumerable_concatMap,
    Iterable_toObservable,
  );

export default Enumerable_flatMapIterable;
