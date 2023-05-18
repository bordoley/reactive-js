import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import { composeLazy } from "../../functions.js";

const EnumeratorFactory_fromValue: EnumeratorFactory.Signature["fromValue"] = <
  T,
>() => composeLazy(ReadonlyArray_fromValue<T>(), ReadonlyArray_enumerate());

export default EnumeratorFactory_fromValue;
