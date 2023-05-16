import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { compose } from "../../functions.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

const Optional_enumerate = <T>() =>
  compose(Optional_toReadonlyArray<T>(), ReadonlyArray_enumerate());

export default Optional_enumerate;
