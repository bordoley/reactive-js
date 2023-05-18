/// <reference types="./EnumeratorFactory.someSatisfy.d.ts" />

import Enumerator_someSatisfy from "../../Enumerator/__internal__/Enumerator.someSatisfy.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_someSatisfy = (predicate) => compose(EnumeratorFactory_enumerate(), Enumerator_someSatisfy(predicate));
export default EnumeratorFactory_someSatisfy;
