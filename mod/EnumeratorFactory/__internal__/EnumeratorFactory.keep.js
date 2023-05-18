/// <reference types="./EnumeratorFactory.keep.d.ts" />

import Enumerator_keep from "../../Enumerator/__internal__/Enumerator.keep.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_keep = (predicate) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_keep(predicate));
export default EnumeratorFactory_keep;
