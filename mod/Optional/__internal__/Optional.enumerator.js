/// <reference types="./Optional.enumerator.d.ts" />

import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { compose } from "../../functions.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";
const Optional_enumerate = () => compose(Optional_toReadonlyArray(), ReadonlyArray_enumerate());
export default Optional_enumerate;
