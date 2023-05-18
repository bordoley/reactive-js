/// <reference types="./EnumeratorFactory.first.d.ts" />

import Enumerator_first from "../../Enumerator/__internal__/Enumerator.first.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_first = () => compose(EnumeratorFactory_enumerate(), Enumerator_first());
export default EnumeratorFactory_first;
