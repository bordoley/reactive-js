/// <reference types="./EnumeratorFactory.fromFactory.d.ts" />

import { compose } from "../../functions.js";
import EnumeratorFactory_fromValue from "./EnumeratorFactory.fromValue.js";
import EnumeratorFactory_map from "./EnumeratorFactory.map.js";
const EnumeratorFactory_fromFactory = () => compose(EnumeratorFactory_fromValue(), EnumeratorFactory_map((f) => f()));
export default EnumeratorFactory_fromFactory;
