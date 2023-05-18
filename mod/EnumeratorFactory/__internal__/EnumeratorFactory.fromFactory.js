/// <reference types="./EnumeratorFactory.fromFactory.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_fromFactory from "../../ReadonlyArray/__internal__/ReadonlyArray.fromFactory.js";
import { composeLazy } from "../../functions.js";
const EnumeratorFactory_fromFactory = () => composeLazy(ReadonlyArray_fromFactory(), ReadonlyArray_enumerate());
export default EnumeratorFactory_fromFactory;
