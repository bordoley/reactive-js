import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_fromFactory from "../../ReadonlyArray/__internal__/ReadonlyArray.fromFactory.js";
import { composeLazy } from "../../functions.js";

const EnumeratorFactory_fromFactory: EnumeratorFactory.Signature["fromFactory"] =
  <T>() =>
    composeLazy(ReadonlyArray_fromFactory<T>(), ReadonlyArray_enumerate());

export default EnumeratorFactory_fromFactory;
