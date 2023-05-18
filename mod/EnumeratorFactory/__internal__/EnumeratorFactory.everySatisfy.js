/// <reference types="./EnumeratorFactory.everySatisfy.d.ts" />

import Enumerator_everySatisfy from "../../Enumerator/__internal__/Enumerator.everySatisfy.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_everySatisfy = (predicate) => compose(EnumeratorFactory_enumerate(), Enumerator_everySatisfy(predicate));
export default EnumeratorFactory_everySatisfy;
