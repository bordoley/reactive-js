import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Function1, Optional, compose } from "../../functions.js";
import { EnumerableLike } from "../../types.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

const Optional_toObservable: <T>() => Function1<
  Optional<T>,
  EnumerableLike<T>
> = () => compose(Optional_toReadonlyArray(), ReadonlyArray_toObservable());
export default Optional_toObservable;
