/// <reference types="./EnumeratorFactory.reduce.d.ts" />

import Enumerator_reduce from "../../Enumerator/__internal__/Enumerator.reduce.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_reduce = (reducer, initialValue) => compose(EnumeratorFactory_enumerate(), Enumerator_reduce(reducer, initialValue));
export default EnumeratorFactory_reduce;
