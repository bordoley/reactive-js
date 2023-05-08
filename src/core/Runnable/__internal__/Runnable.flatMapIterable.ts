import { Containers, RunnableContainer } from "../../../core.js";
import Container_flatMapIterable from "../../../core/Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../../core/Iterable/__internal__/Iterable.toObservable.js";
import Runnable_concatMap from "./Runnable.concatMap.js";

const Runnable_flatMapIterable: Containers.TypeClass<RunnableContainer>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Runnable_concatMap,
    Iterable_toObservable,
  );

export default Runnable_flatMapIterable;
