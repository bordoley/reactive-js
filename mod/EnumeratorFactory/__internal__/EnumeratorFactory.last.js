/// <reference types="./EnumeratorFactory.last.d.ts" />

import Enumerator_last from "../../Enumerator/__internal__/Enumerator.last.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_last = () => compose(EnumeratorFactory_enumerate(), Enumerator_last());
export default EnumeratorFactory_last;
