/// <reference types="./EnumeratorFactory.endWith.d.ts" />

import Enumerator_endWith from "../../Enumerator/__internal__/Enumerator.endWith.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_endWith = (value, ...tail) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_endWith(value, ...tail));
export default EnumeratorFactory_endWith;
