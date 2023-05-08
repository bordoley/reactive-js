import { Containers, EnumerableContainer } from "../../../core.js";
import Container_flatMapIterable from "../../../core/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../../core/Iterable/__internal__/Iterable.toObservable.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";

const Enumerable_flatMapIterable: Containers.TypeClass<EnumerableContainer>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Enumerable_concatMap,
    Iterable_toObservable,
  );

export default Enumerable_flatMapIterable;
