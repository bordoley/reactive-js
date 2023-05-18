/// <reference types="./EnumeratorFactory.zipMany.d.ts" />

import Enumerator_zipMany from "../../Enumerator/__internal__/Enumerator.zipMany.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_zipMany = composeLazy(ReadonlyArray_map(EnumeratorFactory_enumerate()), Enumerator_zipMany);
export default EnumeratorFactory_zipMany;
