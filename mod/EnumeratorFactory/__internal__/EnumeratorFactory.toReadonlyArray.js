/// <reference types="./EnumeratorFactory.toReadonlyArray.d.ts" />

import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_toReadonlyArray = () => compose(EnumeratorFactory_enumerate(), Enumerator_toReadonlyArray());
export default EnumeratorFactory_toReadonlyArray;
