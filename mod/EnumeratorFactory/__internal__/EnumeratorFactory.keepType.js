/// <reference types="./EnumeratorFactory.keepType.d.ts" />

import Enumerator_keepType from "../../Enumerator/__internal__/Enumerator.keepType.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_keepType = ((predicate) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_keepType(predicate)));
export default EnumeratorFactory_keepType;
