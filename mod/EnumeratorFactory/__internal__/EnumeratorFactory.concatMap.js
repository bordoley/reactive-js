/// <reference types="./EnumeratorFactory.concatMap.d.ts" />

import { compose } from "../../functions.js";
import EnumeratorFactory_concatAll from "./EnumeratorFactory.concatAll.js";
import EnumeratorFactory_map from "./EnumeratorFactory.map.js";
const EnumeratorFactory_concatMap = (selector) => compose(EnumeratorFactory_map(selector), EnumeratorFactory_concatAll());
export default EnumeratorFactory_concatMap;
