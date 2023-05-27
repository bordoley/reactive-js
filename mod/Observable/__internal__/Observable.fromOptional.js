/// <reference types="./Observable.fromOptional.d.ts" />

import ReadonlyArray_fromOptional from "../../ReadonlyArray/__internal__/ReadonlyArray.fromOptional.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose } from "../../functions.js";
const Observable_fromOptional = () => compose(ReadonlyArray_fromOptional(), ReadonlyArray_toObservable());
export default Observable_fromOptional;
