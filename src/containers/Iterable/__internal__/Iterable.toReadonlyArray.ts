import { IterableContainer, ToReadonlyArray } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import Iterable_enumerate from "./Iterable.enumerate.js";

const Iterable_toReadonlyArray: ToReadonlyArray<IterableContainer>["toReadonlyArray"] =
  /*@__PURE__*/ (<T>() =>
    returns(compose(Iterable_enumerate<T>(), Enumerator_toReadonlyArray())))();

export default Iterable_toReadonlyArray;
