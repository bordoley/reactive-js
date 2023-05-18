/// <reference types="./EnumeratorFactory.noneSatisfy.d.ts" />

import Enumerator_noneSatisfy from "../../Enumerator/__internal__/Enumerator.noneSatisfy.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_noneSatisfy = (predicate) => compose(EnumeratorFactory_enumerate(), Enumerator_noneSatisfy(predicate));
export default EnumeratorFactory_noneSatisfy;
