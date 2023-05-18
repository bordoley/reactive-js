/// <reference types="./EnumeratorFactory.takeFirst.d.ts" />

import Enumerator_takeFirst from "../../Enumerator/__internal__/Enumerator.takeFirst.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_takeFirst = (options) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_takeFirst(options));
export default EnumeratorFactory_takeFirst;
