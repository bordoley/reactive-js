/// <reference types="./Optional.toObservable.d.ts" />

import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose } from "../../functions.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";
const Optional_toObservable = () => compose(Optional_toReadonlyArray(), ReadonlyArray_toObservable());
export default Optional_toObservable;
