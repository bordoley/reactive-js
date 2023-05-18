/// <reference types="./EnumeratorFactory.scan.d.ts" />

import Enumerator_scan from "../../Enumerator/__internal__/Enumerator.scan.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_scan = (reducer, initialValue) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_scan(reducer, initialValue));
export default EnumeratorFactory_scan;
