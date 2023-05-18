/// <reference types="./EnumeratorFactory.skipFirst.d.ts" />

import Enumerator_skipFirst from "../../Enumerator/__internal__/Enumerator.skipFirst.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_skipFirst = (options) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_skipFirst(options));
export default EnumeratorFactory_skipFirst;
