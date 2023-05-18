/// <reference types="./EnumeratorFactory.concatAll.d.ts" />

import Enumerator_concatMap from "../../Enumerator/__internal__/Enumerator.concatMap.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_concatAll = () => composeLazy(EnumeratorFactory_enumerate(), Enumerator_concatMap(EnumeratorFactory_enumerate()));
export default EnumeratorFactory_concatAll;
