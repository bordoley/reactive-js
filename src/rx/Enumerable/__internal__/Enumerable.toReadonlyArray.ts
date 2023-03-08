import { ToReadonlyArray } from "../../../containers.js";
import Enumerator_toReadonlyArray from "../../../containers/Enumerator/__internal__/Enumerator.toArray.js";
import { pipe } from "../../../functions.js";
import { EnumerableLike } from "../../../rx.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";

const Enumerable_toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =

    <T>() =>
    (enumerable: EnumerableLike<T>) =>
      pipe(enumerable, Enumerable_enumerate<T>(), Enumerator_toReadonlyArray());

export default Enumerable_toReadonlyArray;
