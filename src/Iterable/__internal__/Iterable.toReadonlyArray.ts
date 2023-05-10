import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import type * as Iterable from "../../Iterable.js";
import { compose, returns } from "../../functions.js";
import Iterable_enumerate from "./Iterable.enumerate.js";

const Iterable_toReadonlyArray: Iterable.Signature["toReadonlyArray"] =
  /*@__PURE__*/ (<T>() =>
    returns(compose(Iterable_enumerate<T>(), Enumerator_toReadonlyArray())))();

export default Iterable_toReadonlyArray;
