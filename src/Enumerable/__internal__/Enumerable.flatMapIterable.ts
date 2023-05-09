import Container_flatMapIterable from "../../Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import { Containers, EnumerableContainer } from "../../containers.js";
import Enumerable_concatMap from "./Enumerable.concatMap.js";

const Enumerable_flatMapIterable: Containers.TypeClass<EnumerableContainer>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Enumerable_concatMap,
    Iterable_toObservable,
  );

export default Enumerable_flatMapIterable;
