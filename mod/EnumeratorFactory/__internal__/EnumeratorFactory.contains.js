/// <reference types="./EnumeratorFactory.contains.d.ts" />

import Enumerator_contains from "../../Enumerator/__internal__/Enumerator.contains.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_contains = (value, options) => compose(EnumeratorFactory_enumerate(), Enumerator_contains(value, options));
export default EnumeratorFactory_contains;
