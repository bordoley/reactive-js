/// <reference types="./EnumeratorFactory.mapTo.d.ts" />

import { returns } from "../../functions.js";
import EnumeratorFactory_map from "./EnumeratorFactory.map.js";
const EnumeratorFactory_mapTo = (v) => EnumeratorFactory_map(returns(v));
export default EnumeratorFactory_mapTo;
