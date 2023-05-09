import Container_flatMapIterable from "../../Container/__internal__/Container.flatMapIterable.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import { Containers, RunnableContainer } from "../../types.js";
import Runnable_concatMap from "./Runnable.concatMap.js";

const Runnable_flatMapIterable: Containers.TypeClass<RunnableContainer>["flatMapIterable"] =
  /*@__PURE__*/ Container_flatMapIterable(
    Runnable_concatMap,
    Iterable_toObservable,
  );

export default Runnable_flatMapIterable;
