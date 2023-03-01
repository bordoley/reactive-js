import { IterableLike, ToReadonlyArray } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import Runnable_toReadonlyArray from "../../../rx/Runnable/__internal__/Runnable.toReadonlyArray.js";
import Iterable_toObservable from "./Iterable.toObservable.js";

const Iterable_toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"] =
  /*@__PURE__*/ (() =>
    returns(compose(Iterable_toObservable(), Runnable_toReadonlyArray())))();

export default Iterable_toReadonlyArray;
