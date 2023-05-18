/// <reference types="./EnumeratorFactory.map.d.ts" />

import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_map = (selector) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_map(selector));
export default EnumeratorFactory_map;
