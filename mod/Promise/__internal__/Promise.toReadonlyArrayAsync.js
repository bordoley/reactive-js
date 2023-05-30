/// <reference types="./Promise.toReadonlyArrayAsync.d.ts" />

import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
const Promise_toReadonlyArrayAsync = () => (promise) => promise.then(ReadonlyArray_fromValue());
export default Promise_toReadonlyArrayAsync;
