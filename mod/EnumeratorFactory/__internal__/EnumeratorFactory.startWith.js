/// <reference types="./EnumeratorFactory.startWith.d.ts" />

import Enumerator_startWith from "../../Enumerator/__internal__/Enumerator.startWith.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_startWith = (value, ...tail) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_startWith(value, ...tail));
export default EnumeratorFactory_startWith;
