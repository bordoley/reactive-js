/// <reference types="./EnumeratorFactory.fromValue.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import { composeLazy } from "../../functions.js";
const EnumeratorFactory_fromValue = () => composeLazy(ReadonlyArray_fromValue(), ReadonlyArray_enumerate());
export default EnumeratorFactory_fromValue;
