/// <reference types="./Observable.fromValue.d.ts" />

import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose } from "../../functions.js";
const Observable_fromValue = () => compose(ReadonlyArray_fromValue(), ReadonlyArray_toObservable());
export default Observable_fromValue;
