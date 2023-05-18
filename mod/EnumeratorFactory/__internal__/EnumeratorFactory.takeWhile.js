/// <reference types="./EnumeratorFactory.takeWhile.d.ts" />

import Enumerator_takeWhile from "../../Enumerator/__internal__/Enumerator.takeWhile.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_takeWhile = (predicate, options = {}) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_takeWhile(predicate, options));
export default EnumeratorFactory_takeWhile;
