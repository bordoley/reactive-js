/// <reference types="./EnumeratorFactory.takeLast.d.ts" />

import Enumerator_takeLast from "../../Enumerator/__internal__/Enumerator.takeLast.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_takeLast = (options) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_takeLast(options));
export default EnumeratorFactory_takeLast;
