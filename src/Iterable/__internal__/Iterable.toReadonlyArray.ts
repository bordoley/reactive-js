import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import { Function1, compose, returns } from "../../functions.js";
import Iterable_enumerate from "./Iterable.enumerate.js";

const Iterable_toReadonlyArray: <T>() => Function1<Iterable<T>, readonly T[]> =
  /*@__PURE__*/ (<T>() =>
    returns(compose(Iterable_enumerate<T>(), Enumerator_toReadonlyArray())))();

export default Iterable_toReadonlyArray;
